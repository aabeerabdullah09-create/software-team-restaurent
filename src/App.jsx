import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Mainpage from "../src/container/Mainpage.jsx";
import Foodpage from "../src/container/Foodpage.jsx";
import Dessertpage from "../src/container/Dessertpage.jsx";
import Drinkspage from "../src/container/Drinkspage.jsx";
import NotFound from "../src/container/NotFound.jsx";
import VanillaStoryPage from "../src/container/VanillaStoryPage.jsx";
import Orderpage from "../src/container/Orderpage.jsx";
import Cartpage from "../src/container/Cartpage.jsx";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [cart, setCart] = useState([]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Mainpage" element={<Mainpage />} />
        <Route path="/Home" element={<Mainpage />} />

        <Route path="/Foodpage" element={<Foodpage />} />
        <Route path="/Foodpage/:id" element={<Foodpage />} />

        <Route path="/Drinkspage" element={<Drinkspage />} />
        <Route path="/Drinkspage/:id" element={<Drinkspage />} />

        <Route path="/Dessertpage" element={<Dessertpage />} />
        <Route path="/Dessertpage/:id" element={<Dessertpage />} />

        <Route
          path="/VanillaStoryPage"
          element={<VanillaStoryPage />}
        />

        <Route
          path="/order"
          element={
            <Orderpage
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cartpage
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;