const Cart = () => {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem />
    </div>
  );
};

export default Cart;

const CartItem = () => {
  return (
    <div className="cart-item">
      <p>{"product.name"}</p>
      <p>{"product.price"}</p>
      <p>1개</p>
    </div>
  );
};
