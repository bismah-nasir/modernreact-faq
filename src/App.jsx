import Header from "./components/Header";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="w-[90%] sm:w-[600px] bg-white rounded-2xl px-10 pt-10 pb-3 m-[0.25rem]">
        <Header />
        <Questions />
      </div>
        
      <div className="mb-[10px]">
        <Footer />
        </div>
    </>
  );
};

export default App;