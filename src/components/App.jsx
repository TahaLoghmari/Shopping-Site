import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import githubLogo from "../assets/github.png";
import Logo from "../assets/Logo.png";
import styles from "../styles/App.module.css";
import "../styles/global.module.css";
export default function App() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const [shoppingCards, setShoppingCards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=24", { mode: "cors" })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((json) => {
        const updatedCards = json.map((card) => ({
          ...card,
          quantity: 1,
        }));
        setShoppingCards(updatedCards);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo} alt="Main Logo" width="30px" height="auto" />
          <p className={styles.appTitle}>Shopping Cart</p>
        </div>
        <div className={styles.buttons}>
          <Link to="/" className={styles.link}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#50504f"
            >
              <path d="M192-144v-456l288-216 288 216v456H552v-264H408v264H192Z" />
            </svg>
            Home
          </Link>
          <Link to="/cart" className={styles.link}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#50504f"
            >
              <path d="M263.79-96Q234-96 213-117.21t-21-51Q192-198 213.21-219t51-21Q294-240 315-218.79t21 51Q336-138 314.79-117t-51 21Zm432 0Q666-96 645-117.21t-21-51Q624-198 645.21-219t51-21Q726-240 747-218.79t21 51Q768-138 746.79-117t-51 21ZM222-768h570q14 0 20.5 11t1.5 23L702.63-476.14Q694-456 676.5-444T637-432H317l-42 72h493v72H276q-43 0-63.5-36.15-20.5-36.16.5-71.85l52-90-131-306H48v-72h133l41 96Z" />
            </svg>
            <p>Cart</p>
            <p className={styles.numberOfItems}>{numberOfItems}</p>
          </Link>
          <p>$ {totalPrice.toFixed(2)}</p>
        </div>
      </div>
      {loading ? (
        <div className={styles.loadingScreen}>Loading...</div>
      ) : error ? (
        <p>A network error was encountered</p>
      ) : (
        <Outlet
          context={{
            setNumberOfItems,
            setTotalPrice,
            purchasedProducts,
            setPurchasedProducts,
            shoppingCards,
            setShoppingCards,
          }}
        />
      )}
      <div className={styles.footer}>
        <a href="https://github.com/TahaLoghmari">
          Taha Loghmari{" "}
          <img src={githubLogo} alt="Github Icon" width="25px" height="auto" />
        </a>
      </div>
    </>
  );
}
