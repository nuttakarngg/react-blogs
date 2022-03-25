import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import { Menu } from "antd";
import { HomeOutlined, FormOutlined } from "@ant-design/icons";
// import { useState } from "react";
function App() {
  return (
    <BrowserRouter>
      <Menu mode="horizontal">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FormOutlined />}>
          <Link to="/blogs">Blogs</Link>
        </Menu.Item>
      </Menu>
      <div style={{padding:"10px 15px"}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//   let [number1, setNumber1] = useState(0);
//   let [number2, setNumber2] = useState(0);
//   return (
//     <div className="App">

//       <Input
//         type="number"
//         onChange={(event) => setNumber1(event.target.value)}
//         value={number1}
//       />
//       <Input
//         type="number"
//         onChange={(event) => setNumber2(event.target.value)}
//         value={number2}
//       />
//       <h1>{parseInt(number1) + parseInt(number2)}</h1>
//     </div>
//   );
