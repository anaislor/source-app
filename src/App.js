import Topbar from "./components/Topbar";
import "./styles/App.scss";
import Wishlist from "./views/Wishlist";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Wishlist />
    </div>
  );
}

export default App;
