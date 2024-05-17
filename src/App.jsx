import Navbar from "./Navbar";
import ItemListContainer from "./ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./itemsDetailsContainer";
import NotFound from "./notFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path={"/"} element={<ItemListContainer />} />
          <Route exact path={"/category/:id"} element={<ItemListContainer />} />
          <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route exact path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
