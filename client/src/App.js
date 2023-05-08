import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DisplayAll from "./components/DisplayAll";
import AuthorForm from './components/AuthorForm';
import EditAuthor from "./components/EditAuthor";


function App() {
  return (
    <div>
      <h2>Favorite Authors</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll />} />
          <Route path="/new" element={<AuthorForm />} />
          <Route path="/edit/:id" element={<EditAuthor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
