import Footer from "@components/footer";
import Navigation from "./apps/navigation/nagivation";
import SinglePage from "./apps/pages/landing/SinglePage";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <SinglePage />
      <Footer />
    </div>
  );
}

export default App;
