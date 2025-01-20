import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import EventPage from './EventPage';
import NotFound from './NotFound';
import GalleryPage from './GalleryPage';
import VenuePage from './VenuePage';
import ThankYouPage from './ThankYouPage';

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />  
            <Route path="events" element={<EventPage />} /> 
            <Route path="gallery" element={<GalleryPage />} />  
            <Route path="venue" element={<VenuePage />} />  
            <Route path="thank-you" element={<ThankYouPage />} />  
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
