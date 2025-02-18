import styles from "../styles/PurchasedProduct.module.css";
import PropTypes from "prop-types";
export default function PurchasedProduct({
  purchasedProduct,
  setNumberOfItems,
  setTotalPrice,
  setPurchasedProducts,
  setShoppingCards,
}) {
  let handleQuantity = (e) => {
    const newQuantity = Number(e.target.value);
    setShoppingCards((prevState) =>
      prevState.map((card) =>
        card.id === purchasedProduct.id
          ? { ...card, quantity: newQuantity }
          : card
      )
    );
    setPurchasedProducts((prevState) =>
      prevState.map((card) =>
        card.id === purchasedProduct.id
          ? { ...card, quantity: newQuantity }
          : card
      )
    );
  };
  let handleNumberOfItems = (e) => {
    setNumberOfItems(
      (previousNumberOfItems) =>
        previousNumberOfItems -
        purchasedProduct.quantity +
        Number(e.target.value)
    );
  };
  let handleTotalPrice = (e) => {
    setTotalPrice(
      (PreviousTotalPrice) =>
        PreviousTotalPrice -
        purchasedProduct.quantity * purchasedProduct.price +
        Number(e.target.value) * purchasedProduct.price
    );
  };
  let handlePurchasedProducts = () => {
    setPurchasedProducts((prevState) =>
      prevState.filter((item) => item.id !== purchasedProduct.id)
    );
  };
  let handleTotalPriceRemove = () => {
    setTotalPrice(
      (prevState) =>
        prevState - purchasedProduct.price * purchasedProduct.quantity
    );
  };
  let handleNumberOfItemsRemove = () => {
    setNumberOfItems((prevState) => prevState - purchasedProduct.quantity);
  };
  return (
    <div className={styles.cartCard}>
      <img
        src={purchasedProduct.image}
        alt="purchased Product"
        className={styles.img}
      />
      <div className={styles.content}>
        <div className={styles.header}>
          <p>{purchasedProduct.title}</p>
          <p>{purchasedProduct.description}</p>
        </div>
        <div className={styles.footer}>
          <p>${purchasedProduct.price}</p>
          <button
            className={styles.button}
            onClick={() => {
              handleTotalPriceRemove();
              handleNumberOfItemsRemove();
              handlePurchasedProducts();
            }}
          >
            Remove
          </button>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={purchasedProduct.quantity}
            onChange={(e) => {
              handleTotalPrice(e);
              handleNumberOfItems(e);
              handleQuantity(e);
            }}
            className={styles.input}
          />
        </div>
      </div>
    </div>
  );
}
PurchasedProduct.propTypes = {
  purchasedProduct: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  setNumberOfItems: PropTypes.func.isRequired,
  setTotalPrice: PropTypes.func.isRequired,
  setPurchasedProducts: PropTypes.func.isRequired,
  setShoppingCards: PropTypes.func.isRequired,
};
