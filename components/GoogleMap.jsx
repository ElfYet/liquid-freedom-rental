import React from 'react'
const API_EMBEDDED_MAP_KEY = process.env.API_EMBEDDED_MAP_KEY;

const GoogleMap = () => {
  return (
    <div className='container'>
        {/* Inserted is a free* Maps Embed API (limited to one marker), 
        for further development consider adding a Google Maps JavaScript API
        (fee applied when exceeding 28,500* map loads per month) */}
        <iframe className='w-full' height="400" style={{ border:0 }} loading="lazy" allowFullScreen src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJf4LQbFetxIgRPJe8dXYbnmU&key=${API_EMBEDDED_MAP_KEY}`}></iframe>
    </div>
  );
};

export default GoogleMap;