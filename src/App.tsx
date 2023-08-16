import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <Title> Area Admnistrativa</Title>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
