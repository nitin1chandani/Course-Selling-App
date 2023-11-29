import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Appbar from "./Appbar";
import Signin from "./Signin";
import Addcourse from "./Addcourse";
const App = () => {
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}
    >
      <Appbar />

      <Routes>
        <Route path="addcourse" element={<Addcourse />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
