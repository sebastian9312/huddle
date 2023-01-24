import GlobalStyle from "./components/styles/Global";
import { ThemeProvider } from "styled-components";

import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Card from "./components/Card";

import content from "./content";
import Footer from "./components/Footer";

const theme = {
  colors: {
    body: "#fff",
    header: "#ebfbff",
    footer: "#003333"
  },
  screen: {
    mobile: "max-width: 768px"
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container>
          {content.map((item, index) => {
            return <Card
              key={index}
              item={item}
            />
          })}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
