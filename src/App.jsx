import Contents from "./components/Contents";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="m-4">
      <Header title="Assignment: Creating a Simple React Application" />
      <Contents />
      <Footer />
    </div>
  );
};

export default App;
