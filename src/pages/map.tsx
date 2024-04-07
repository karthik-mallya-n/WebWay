import React, { useState } from 'react';

const LocationPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [locationDetails, setLocationDetails] = useState('');
  const [deliveryStatus, setDeliveryStatus] = useState('');

  // Function to get current location details
  const getCurrentLocation = () => {
    // Here you can implement logic to fetch location details
    // For demonstration purposes, setting dummy data
    const dummyLocationDetails = 'Latitude: 40.7128, Longitude: -74.0060';
    setLocationDetails(dummyLocationDetails);

    // Simulate fetching delivery status
    const isDeliveryInProgress = Math.random() < 0.5; // Randomly generate delivery status
    const status = isDeliveryInProgress ? 'In Progress' : 'Delivered';
    setDeliveryStatus(status);

    setShowPopup(true);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={getCurrentLocation}
      >
        Show Location Details
      </button>

      {/* Popup to display location details */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-[100vh] flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">Location Details</h2>
            <p><strong>Current Location:</strong> {locationDetails}</p>
            <p><strong>Delivery Status:</strong> {deliveryStatus}</p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationPopup;
