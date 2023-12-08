import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** importing our pages */
import Tracks from './tracks';
import TrackPage from './trackPage';
export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Tracks />} path="/" />
        <Route element={<TrackPage/>} path="/track/:trackId" />
      </Routes>
    </BrowserRouter>
  );
}
