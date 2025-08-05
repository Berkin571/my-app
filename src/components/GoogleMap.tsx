/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, type FunctionComponent } from "react";

interface GoogleMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  title?: string;
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export const GoogleMap: FunctionComponent<GoogleMapProps> = ({
  latitude,
  longitude,
  zoom = 15,
  title = "Location",
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load Google Maps API if not already loaded
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${
        import.meta.env.VITE_GOOGLE_MAPS_KEY
      }&callback=initMap`;
      script.async = true;
      script.defer = true;

      window.initMap = () => {
        if (mapRef.current && !mapInstanceRef.current) {
          const location = { lat: latitude, lng: longitude };

          mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
            center: location,
            zoom: zoom,
            mapTypeId: window.google.maps.MapTypeId.ROADMAP,
            styles: [
              {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }],
              },
            ],
          });

          // Add marker
          new window.google.maps.Marker({
            position: location,
            map: mapInstanceRef.current,
            title: title,
            animation: window.google.maps.Animation.DROP,
          });
        }
      };

      document.head.appendChild(script);
    } else {
      // If Google Maps is already loaded, initialize map directly
      if (mapRef.current && !mapInstanceRef.current) {
        const location = { lat: latitude, lng: longitude };

        mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
          center: location,
          zoom: zoom,
          mapTypeId: window.google.maps.MapTypeId.ROADMAP,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        });

        // Add marker
        new window.google.maps.Marker({
          position: location,
          map: mapInstanceRef.current,
          title: title,
          animation: window.google.maps.Animation.DROP,
        });
      }
    }

    return () => {
      // Cleanup
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, [latitude, longitude, zoom, title]);

  return (
    <div className="google-map-container">
      <div ref={mapRef} className="google-map" />
      <div className="map-info">
        <h3>{title}</h3>
      </div>
    </div>
  );
};
