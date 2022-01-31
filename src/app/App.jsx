import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "../common/components/Header";
import { MainWrapper } from "../common/components/MainWrapper";
import { Catalogs } from "../features/catalogs/Catalogs";
import HomePage from "../pages/Home/HomePage";
import { theme } from "./style";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
        </MainWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
