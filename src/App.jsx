import {Routes,Route}from "react-router-dom";
import Mainpage from "../src/container/Mainpage.jsx";
import Foodpage from "../src/container/Foodpage.jsx";
import Dessertpage from "../src/container/Dessertpage.jsx";
import Drinkspage from "../src/container/Drinkspage.jsx";
import NotFound from "../src/container/NotFound.jsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import VanillaStoryPage from "../src/container/VanillaStoryPage.jsx";
import Order from "./component/Order.jsx";
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
function App() {
  return (
      <>
      <Routes>
          <Route path="/" element={<Mainpage/>}/>
          <Route path="/Mainpage" element={<Mainpage/>}/>
          <Route path="/Home" element={<Mainpage/>}/>
          <Route path="/Foodpage" element={<Foodpage/>}/>
          <Route path="/Drinkspage" element={<Drinkspage/>}/>
          <Route path="/Drinkspage/:id" element={<Drinkspage/>}/>
          <Route path="/Dessertpage" element={<Dessertpage/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/Foodpage/:id" element={<Foodpage/>} />
          <Route path="/VanillaStoryPage" element={<VanillaStoryPage/>} />
          <Route path="/Dessertpage/:id" element={<Dessertpage />} />
         <Route path="/Order/:id" element={<Order />} />

      </Routes>
          <ThemeProvider theme={darkTheme}>
              <CssBaseline />
              <main></main>
          </ThemeProvider>
      </>
  )
}

export default App
