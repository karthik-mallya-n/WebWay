import Map from "react-map-gl";
import { env } from "~/env";
export function MapContainer() {
  return (
    <Map
      mapboxAccessToken={
        "pk.eyJ1IjoiZGhhbnVzaGxuYWlrIiwiYSI6ImNsdW1xYnBwajB4MGUybG13Z2t2MWV1dWwifQ.w9ad8DlfyjuV3MuKk5LlYg"
      }
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}
