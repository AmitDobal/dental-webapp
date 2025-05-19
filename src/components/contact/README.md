# Contact Components

## GoogleMap Component

The `GoogleMap` component is a reusable, customizable component for embedding Google Maps in your application.

### Usage

```jsx
import GoogleMap from "../components/contact/GoogleMap";

// Basic usage with default values
<GoogleMap />

// Custom usage with props
<GoogleMap
  embedUrl="https://www.google.com/maps/embed?pb=!1m18!..."
  title="Our Downtown Office"
  height="500px"
  width="100%"
  className="my-5"
  rounded={false}
/>
```

### Props

| Prop        | Type    | Default               | Description                                                                  |
| ----------- | ------- | --------------------- | ---------------------------------------------------------------------------- |
| `embedUrl`  | string  | Google Maps embed URL | The embed URL for Google Maps (get from Google Maps "Share > Embed" feature) |
| `title`     | string  | "Location Map"        | The title attribute for the iframe for accessibility                         |
| `height`    | string  | "400px"               | Height of the map                                                            |
| `width`     | string  | "100%"                | Width of the map                                                             |
| `className` | string  | ""                    | Additional CSS classes to apply to the container                             |
| `rounded`   | boolean | true                  | Whether to apply rounded corners to the map container                        |

### How to Get a Google Maps Embed URL

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your location
3. Click on "Share" button
4. Select "Embed a map" tab
5. Copy the iframe src URL or the entire iframe code
6. Use the src URL from the iframe as the `embedUrl` prop

### Example with Location from clinicInfo

```jsx
import GoogleMap from "./GoogleMap";
import { clinicInfo } from "../../data/clinicInfo";

const LocationSection = () => {
  // If you store the map URL in your data
  // const mapUrl = clinicInfo.mapEmbedUrl;

  return (
    <div className="container">
      <h2>Visit Us</h2>
      <GoogleMap
        // Pass your embed URL or use default
        title={`${clinicInfo.name} Location`}
        height="450px"
      />
      <p>{clinicInfo.address}</p>
    </div>
  );
};
```
