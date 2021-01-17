import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="bt-app">
      <Header />
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
