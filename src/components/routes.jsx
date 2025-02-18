import App from "./App";
import Cart from "./Cart";
import ShoppingCart from "./ShoppingCart";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ShoppingCart />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
