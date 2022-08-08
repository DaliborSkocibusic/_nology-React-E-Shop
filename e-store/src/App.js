import { useEffect, useState } from "react";
import { getItems } from "./services/items";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./containers/ItemList/ItemList";
import Nav from "./components/Nav/Nav";
import "./global.scss";
import NewItemPage from "./containers/NewItemPage/NewItemPage";
import ItemPage from "./containers/ItemPage/ItemPage";

function App() {
    useEffect(() => {
        // console.log("App renders");
    }, []);

    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <h1>My Amazon Orders Store</h1>
                            <ItemList />
                        </div>
                    }
                />
                <Route path="/items/:id" element={<ItemPage />} />
                <Route path="/items/new" element={<NewItemPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
