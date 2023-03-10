import BookList from "./components/Booklist";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
