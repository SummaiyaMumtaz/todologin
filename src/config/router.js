// import { Router } from "react-router-dom";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from "../screen/home";
import Login from "../screen/login";
import Signup from "../screen/signup";
import TodoApp from "../screen/todo";

function AppRouter() {
    return (
<Router>
<Routes>
    <Route path="todo" element={<TodoApp/>}/>
    <Route path='login' element={<Login/>}></Route>
    <Route path='signup' element={<Signup/>}/>
    <Route path="/" element={<Home></Home>}/>
</Routes>
</Router>
    )
}
export default AppRouter;