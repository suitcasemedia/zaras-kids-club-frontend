import axios from 'axios';

function getRequestParams(email) {
  // get env variables
  const API_KEY = process.env.MAIL_CHIMP_Z_CQ_SIGNUP_FORM_API_KEY;
  const LIST_ID = process.env.MAIL_CHIMP_Z_CQ_AUDIENCE_ID;

  const DATACENTER = process.env.MAILCHIMP_API_SERVER;

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  // Add aditional params here. See full list of available params:
  // https://mailchimp.com/developer/reference/lists/list-members/
  const data = {
    email_address: email,
    status: 'subscribed',
  };

  // Api key needs to be encoded in base 64 format
  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
}

export default async (req, res) => {
  const { email } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({
      error: 'Forgot to add your email?',
    });
  }

  try {
    const { url, data, headers } = getRequestParams(email);

    const response = await axios.post(url, data, { headers });

    // Success
    return res.status(201).json({ error: null });
  } catch (error) {
    console.log('here is the error');
    console.log('hello', error.response.data.title);

    return res.status(400).json({
      error:
        error.response.data.title === 'Member Exists'
          ? `${email} is  already subscribed to Zara's Artistic Creative Quest! We have sent you your first activity pack. If you can't find it try your spam folder. If you still can't find it please email me at hello@zaraskids.club`
          : "Oops, something went wrong... Send me an email  at hello@zaraskids.club and I'll add you to the list.",
      // error: `Oops, something went wrong... Send me an email and I'll add you to the list.`,
    });

    // Report error to Sentry or whatever
  }
};
