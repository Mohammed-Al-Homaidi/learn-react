import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Singup from "./Singup";
import Login from "./login";
import Base from "./base";
import About from "./about";
import Users from "./users";
import Edituser from "./edituser";
import Createusers from "./craetuser";
import Minepage from "./indexbase";
import Test from "./tets";
import Rcouredathe from "./Rcouredathe";
export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Rcouredathe />}>
          <Route path="/base" element={<Base />}>
            <Route index element={<Minepage />} />
            <Route path="users" element={<Users />} />
            <Route path="users/create" element={<Createusers />} />
            <Route path="users/:id" element={<Edituser />} />
          </Route>
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/Singin" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/base/users" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}
