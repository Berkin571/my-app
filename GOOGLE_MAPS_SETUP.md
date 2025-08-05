# Google Maps Setup Guide

## Getting Started

To use the Google Maps component in this application, you need to obtain a Google Maps API key and configure it.

### Step 1: Get a Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Maps JavaScript API" from the API Library
4. Go to "Credentials" and create an API key
5. (Optional) Restrict the API key to your domain for security

### Step 2: Configure the API Key

Replace `YOUR_GOOGLE_MAPS_API_KEY` in the `GoogleMap.tsx` component with your actual API key:

```typescript
// In src/components/GoogleMap.tsx, line 25
script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY&callback=initMap`;
```

### Step 3: Environment Variable (Recommended)

For better security, you can use environment variables:

1. Create a `.env` file in your project root:

```
VITE_GOOGLE_MAPS_KEY=your_actual_api_key_here
```

2. The GoogleMap component is already configured to use the environment variable:

```typescript
script.src = `https://maps.googleapis.com/maps/api/js?key=${
  import.meta.env.VITE_GOOGLE_MAPS_KEY
}&callback=initMap`;
```

### Current Location

The map is currently configured to show New York City (40.7128, -74.0060). You can change the coordinates in `App.tsx`:

```typescript
<GoogleMap
  latitude={40.7128} // Change this to your desired latitude
  longitude={-74.006} // Change this to your desired longitude
  zoom={15}
  title="Your Location Name"
/>
```

### Features

- Interactive Google Maps integration
- Custom marker with animation
- Responsive design
- Location information display
- Clean, modern styling

### Notes

- The Google Maps API has usage limits and may incur costs for high usage
- Make sure to keep your API key secure and never commit it to version control
- The map will only load when the Google Maps API is successfully loaded
