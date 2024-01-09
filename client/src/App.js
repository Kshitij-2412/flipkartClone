import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home, NotFound } from './Components/default';
import { Box } from "@mui/material";

import Home from "./components/Home/Home";
import store from "./redux/store";
//components
import Header from "./components/Header/Header";
import DetailView from "./components/details/DetailView";
// import TemplateProvider from './';
import DataProvider from "./context/DataProvider";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<DetailView />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
