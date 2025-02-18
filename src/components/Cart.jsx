import { useOutletContext } from "react-router-dom";
import PurchasedProduct from "./PurchasedProduct";
import styles from "../styles/Cart.module.css";
export default function Cart() {
  const {
    setNumberOfItems,
    setTotalPrice,
    purchasedProducts,
    setPurchasedProducts,
    // eslint-disable-next-line no-unused-vars
    shoppingCards,
    setShoppingCards,
  } = useOutletContext();
  let clear = () => {
    setPurchasedProducts([]);
    setTotalPrice(0);
    setNumberOfItems(0);
  };
  return (
    <div className={styles.cart}>
      {purchasedProducts.length !== 0 ? (
        <>
          {purchasedProducts.map((purchasedProduct) => (
            <PurchasedProduct
              key={purchasedProduct.id}
              purchasedProduct={purchasedProduct}
              setNumberOfItems={setNumberOfItems}
              setTotalPrice={setTotalPrice}
              setPurchasedProducts={setPurchasedProducts}
              setShoppingCards={setShoppingCards}
            />
          ))}
          <button className={styles.button} onClick={clear}>
            Checkout
          </button>
        </>
      ) : (
        <div className={styles.emptyPurchasedProducts}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#50504f"
            className={styles.cartIcon}
          >
            <path d="M263.79-96Q234-96 213-117.21t-21-51Q192-198 213.21-219t51-21Q294-240 315-218.79t21 51Q336-138 314.79-117t-51 21Zm432 0Q666-96 645-117.21t-21-51Q624-198 645.21-219t51-21Q726-240 747-218.79t21 51Q768-138 746.79-117t-51 21ZM222-768h570q14 0 20.5 11t1.5 23L702.63-476.14Q694-456 676.5-444T637-432H317l-42 72h493v72H276q-43 0-63.5-36.15-20.5-36.16.5-71.85l52-90-131-306H48v-72h133l41 96Z" />
          </svg>
          <p className={styles.title}>Your Cart is empty</p>
          <p className={styles.miniTitle}>
            Looks Like you haven&apos;t added any items yet
          </p>
        </div>
      )}
    </div>
  );
}
