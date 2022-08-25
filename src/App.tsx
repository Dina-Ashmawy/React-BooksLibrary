import "./App.css";
import { useState } from "react";
import LibraryPage from "./components/LibraryPage";
import SearchPage from "./components/SearchPage";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ?
        <SearchPage />
        : <LibraryPage />}
    </div>
  );
}

export default App;
