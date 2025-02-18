import PropTypes from "prop-types";
import styles from "../styles/ShoppingCard.module.css";
export default function ShoppingCard({
  setTotalPrice,
  setNumberOfItems,
  shoppingCard,
  setPurchasedProducts,
  setShoppingCards,
  index,
}) {
  let handleTotalPrice = () => {
    setTotalPrice(
      (PreviousTotalPrice) =>
        PreviousTotalPrice + shoppingCard.price * shoppingCard.quantity
    );
  };
  let handleQuantity = (e) => {
    const newQuantity = Number(e.target.value);
    setShoppingCards((prevState) =>
      prevState.map((card, i) =>
        i === index ? { ...card, quantity: newQuantity } : card
      )
    );
  };
  let handleNumberOfItems = () => {
    setNumberOfItems(
      (previousNumberOfItems) => previousNumberOfItems + shoppingCard.quantity
    );
  };
  let handlePurchasedProducts = () => {
    setPurchasedProducts((prevState) => [
      ...prevState,
      {
        price: shoppingCard.price,
        image: shoppingCard.image,
        title: shoppingCard.title,
        quantity: shoppingCard.quantity,
        id: shoppingCard.id,
        description: shoppingCard.description,
        setShoppingCards: setShoppingCards,
      },
    ]);
  };
  return (
    <div className={styles.shoppingCard}>
      <img
        src={shoppingCard.image}
        alt="The Shopping Card image "
        className={styles.img}
      />
      <div className={styles.title}>{shoppingCard.title}</div>
      <p className={styles.price}>
        ${shoppingCard.price * shoppingCard.quantity}
      </p>
      <div className={styles.quantity}>
        <label htmlFor="quantity">Qty : </label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={shoppingCard.quantity}
          onChange={handleQuantity}
        />
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => {
            handleTotalPrice();
            handleNumberOfItems();
            handlePurchasedProducts();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
ShoppingCard.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  setTotalPrice: PropTypes.func.isRequired,
  numberOfItems: PropTypes.number,
  setNumberOfItems: PropTypes.func.isRequired,
  setPurchasedProducts: PropTypes.func.isRequired,
  setShoppingCards: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  shoppingCard: PropTypes.shape({
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
