import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Template from "./components/Template";
import Home from "./components/Home";
import VenueDetail from "./components/VenueDetail";
import AddComment from "./components/AddComment";
import About from "./components/About";
import Admin from "./components/Admin";
import AddUpdateVenue from "./components/AddUpdateVenue";
import PageNotFound from "./components/PageNotFound";
import UpdateVenue from "./components/UpdateVenue"
import { Routes, Route, BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Template/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="venue/:id" element={<VenueDetail/>}/>
    <Route path="venue/:id/comment/new" element={<AddComment/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="admin" element={<Admin/>}/>
    <Route path="admin/addupdate" element={<AddUpdateVenue/>}/>
    <Route path="admin/updatevenue" element={<UpdateVenue/>}/>
    <Route path="*" element={<PageNotFound/>} />
    </Route>
    </Routes>
  </BrowserRouter>
);
