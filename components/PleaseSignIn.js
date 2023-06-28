import { PropTypes } from 'prop-types';
import { useUser } from './User';
import SignIn from './SignIn';

export default function GatedSignIn({ children }) {
  const me = useUser();
  if (!me) return <SignIn />;
  return children;
}

GatedSignIn.propTypes = {
  children: PropTypes.object,
};
