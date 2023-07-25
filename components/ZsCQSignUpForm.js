import { useState } from 'react';
import axios from 'axios';
import Title from './styles/Title';
import Form from './styles/Form';

export default function ZsCQSignUpForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('IDLE');
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState('LOADING');
    setErrorMessage(null);
    try {
      const response = await axios.post('/api/zaras-creative-quest-sign-up', {
        email,
      });
      setState('SUCCESS');
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState('ERROR');
    }
  };

  return (
    <Form>
      <div>
        <h3>Embark on Zara's Creative Quest</h3>
        <p>
          Enter your parents email to receive your visionary weekly adventure
          pack.
        </p>
        <div className="flex w-1/2 lg:w-2/3 justify-center mt-5 flex-col lg:flex-row">
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="button"
            disabled={state === 'LOADING'}
            onClick={subscribe}
          >
            Subscribe
          </button>
        </div>
        {state === 'ERROR' && (
          <p className="w-1/2 mt-2 text-red-600">{errorMessage}</p>
        )}
        {state === 'SUCCESS' && (
          <p className="w-1/2 mt-2 text-green-600">
            Success! Your first activity pack is on its way!
          </p>
        )}
      </div>
    </Form>
  );
}
