/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState, type FunctionComponent } from "react";
import "./GoogleMap.css";

interface GoogleMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  title?: string;
  showDirections?: boolean;
  addressText?: string;
}

declare global {
  interface Window {
    google: any;
  }
}

let googleMapsApiPromise: Promise<any> | null = null;

function loadGoogleMapsApiOnce(): Promise<any> {
  if (window.google && window.google.maps)
    return Promise.resolve(window.google.maps);
  if (googleMapsApiPromise) return googleMapsApiPromise;

  googleMapsApiPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(
      'script[src^="https://maps.googleapis.com/maps/api/js"]'
    ) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener(
        "load",
        () => resolve(window.google.maps),
        { once: true }
      );
      existingScript.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    const key = import.meta.env.VITE_GOOGLE_MAPS_KEY;
    if (!key) {
      reject(new Error("Missing VITE_GOOGLE_MAPS_KEY"));
      return;
    }
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.google.maps);
    script.onerror = reject;
    document.head.appendChild(script);
  });

  return googleMapsApiPromise;
}

export const GoogleMap: FunctionComponent<GoogleMapProps> = ({
  latitude,
  longitude,
  zoom = 15,
  title = "Location",
  showDirections = false,
  addressText,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    loadGoogleMapsApiOnce()
      .then(() => {
        if (isCancelled || !mapRef.current || mapInstanceRef.current) return;
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

        new window.google.maps.Marker({
          position: location,
          map: mapInstanceRef.current,
          title: title,
          animation: window.google.maps.Animation.DROP,
        });
        setIsLoading(false);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error("Failed to load Google Maps API:", err);
        setHasError("Die Karte konnte nicht geladen werden.");
        setIsLoading(false);
      });

    return () => {
      isCancelled = true;
      mapInstanceRef.current = null;
    };
  }, [latitude, longitude, zoom, title]);

  return (
    <div className="google-map-container">
      <div className="gm-map-wrapper">
        <div ref={mapRef} className="google-map" />
        {isLoading && (
          <div className="gm-loading" aria-live="polite" aria-busy="true">
            <div className="gm-spinner" />
            <span>Karte wird geladen…</span>
          </div>
        )}
        {hasError && !isLoading && (
          <div className="gm-error" role="alert">
            {hasError}
          </div>
        )}
      </div>
      <div className="map-info">
        <h3>{title}</h3>
        {addressText ? <p className="map-address">{addressText}</p> : null}

        {showDirections ? (
          <div className="map-actions">
            <a
              className="gm-btn gm-btn-primary"
              href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Route mit Google Maps
            </a>
            <a
              className="gm-btn gm-btn-secondary"
              href={`https://maps.apple.com/?daddr=${latitude},${longitude}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Route mit Apple Karten
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};
