import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Nav/Navbar";
import ItemListContainer from "./Item/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Item/itemsDetailsContainer";
import NotFound from "./Pages/notFound";
import CheckOut from "./CheckOut/CheckOut";
import CartContextProvider from "./context/context";
import Cart from "./Cart/cart";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path={"/"} element={<ItemListContainer />} />
            <Route
              exact
              path={"/category/:id"}
              element={<ItemListContainer />}
            />
            <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route exact path={"/checkout"} element={<CheckOut />} />
            <Route exact path={"/cart"} element={<Cart />} />
            <Route exact path={"*"} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
