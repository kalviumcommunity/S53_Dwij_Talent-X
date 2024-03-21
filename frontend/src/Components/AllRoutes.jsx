import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./Home"));
const LogIn = lazy(() => import("./LogIn"));
const Post = lazy(() => import("./Post"));
const Profile = lazy(() => import("./Profile"));

export default function AllRoutes() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
      </Suspense>
  );
}
