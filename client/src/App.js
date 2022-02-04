import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import CreateAdmin from "./pages/CreateAdmin";
import DetailAdmin from "./pages/DetailAdmin";
import UpdateAdmin from "./pages/UpdateAdmin";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-admin" element={<CreateAdmin />} />
        <Route path="/update/:id" element={<UpdateAdmin />} />
        <Route path="/:id" element={<DetailAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
