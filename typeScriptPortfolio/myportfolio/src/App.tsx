import "./App.css";
import CreateSections from "./components/CreateSections";
import Header from "./components/header/Header";
import IntroductionSection from "./components/contents/IntroductionSection";
function App() {
  return (
    <div className="App">
      <Header />
      <CreateSections component={<IntroductionSection />} />
    </div>
  );
}

export default App;
