import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Favorites from "./Components/Favorites";
import Gallery from "./Components/Gallery";
import BannerTwo from "./Components/BannerTwo";

function App() {
  return (
   <div className="app">
      <Nav/>
      <Banner/>
      <Favorites/>
      <Gallery/>
      <BannerTwo/>
   </div>
  );
}

export default App;
