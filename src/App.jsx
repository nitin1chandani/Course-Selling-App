import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Appbar from "./Appbar";
import Signin from "./Signin";
import Addcourse from "./Addcourse";
import LandingPage from "./LandingPage";
import Courses from "./Courses";
import Course from "./Course";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
const App = () => {
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}
    >
      <Appbar />
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/addcourse" element={<Addcourse />} />
          <Route path="/courses/:courseId" element={<Course />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
};

export default App;
