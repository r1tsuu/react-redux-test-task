import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "../common/components/Header";
import { MainWrapper } from "../common/components/MainWrapper";
import { AppRoutes } from "./AppRoutes";
import { theme } from "./style";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <Header />
          <AppRoutes />
        </MainWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
