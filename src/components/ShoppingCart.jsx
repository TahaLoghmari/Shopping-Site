import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../styles/ShoppingCart.module.css";
import ShoppingCard from "./ShoppingCard";
export default function ShoppingCart() {
  const {
    setNumberOfItems,
    setTotalPrice,
    // eslint-disable-next-line no-unused-vars
    purchasedProducts,
    setPurchasedProducts,
    shoppingCards,
    setShoppingCards,
  } = useOutletContext();
  return (
    <div className={styles.shoppingCart}>
      <p className={styles.title}>Stock</p>
      <div className={styles.shoppingCards}>
        {shoppingCards.map((shoppingCard, index) => (
          <ShoppingCard
            index={index}
            key={shoppingCard.id}
            setTotalPrice={setTotalPrice}
            setNumberOfItems={setNumberOfItems}
            setPurchasedProducts={setPurchasedProducts}
            shoppingCard={shoppingCard}
            setShoppingCards={setShoppingCards}
          />
        ))}
      </div>
    </div>
  );
}
ShoppingCart.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  numberOfItems: PropTypes.number.isRequired,
  setTotalPrice: PropTypes.func.isRequired,
  setNumberOfItems: PropTypes.func.isRequired,
};
