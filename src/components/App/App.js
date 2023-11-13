import "./App.css";
import Header from "../Header/Header";
import { Route, Routes } from "react-router";
import Main from "../Main/Main";

function App() {
  return (
    <div className="App">
      <Header isLoggedIn={false} />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
