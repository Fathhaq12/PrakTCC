import {BrowserRouter, Routes, Route} from "react-router-dom";
import ListNote from "./components/ListNote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListNote/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;