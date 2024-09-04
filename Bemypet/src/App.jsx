import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Service from "./pages/Service";

function App() {
  return (
    <main className="p-10 relative w-full overflow-hidden transition-all ease-in">
      <Home />
      <Products />
      <Service />
      <Contact />
    </main>
  );
}

export default App;
