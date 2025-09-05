'use client';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// Dynamically import react-leaflet map elements to avoid SSR issues
const DynamicMap = dynamic(() => import('./map/LeafletMap'), { ssr: false });

export default function MapWrapper() {
  // Ensure Leaflet CSS is available
  useEffect(() => {
    const id = 'leaflet-css';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
  }, []);
  return <DynamicMap />;
}
