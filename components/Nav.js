import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';
import SignOut from './SignOut';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';
import Cart from './Cart';

export default function Nav() {
  const user = useUser();
  const { openCart } = useCart();

  return (
    <NavStyles>
      {/* <Link href="/products">Shop</Link> */}
      {user && (
        <>
          {/* <Link href="/sell">Sell</Link>

          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link> */}
          <SignOut />
          <button onClick={openCart}>
            My Cart
            <CartCount
              count={user.cart.reduce(
                (tally, cartItem) =>
                  tally + (cartItem.product ? cartItem.quantity : 0),
                0
              )}
            />
          </button>
        </>
      )}
      <Link href="/about">About</Link>
      <Link href="/ourteam">Our Team</Link>

      {/* {!user && (
        <>
          <Link href="/signin">Sign in</Link>
        </>
      )} */}
    </NavStyles>
  );
}
