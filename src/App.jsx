import Navbar from "./Nav/Navbar";
import ItemListContainer from "./Item/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Item/itemsDetailsContainer";
import NotFound from "./Pages/notFound";
import CheckOut from "./CheckOut/CheckOut";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path={"/"} element={<ItemListContainer />} />
          <Route exact path={"/category/:id"} element={<ItemListContainer />} />
          <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route exact path={"/checkout"} element={<CheckOut />} />

          <Route exact path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
