import { api } from "~/utils/api";

export default () => {
  const { data: qrData } = api.qr.getQR.useQuery({
    jsonData: {
      "id": 1,
      "packageId": 123,
      "qrCode": "ABC123DEF456",
      "qrStatus": true,
      "scanNumber": 5,
      "senderId": "sender123",
      "receiverId": "receiver456",
      "fromAddress": "123 Main St, City",
      "toAddress": "456 Elm St, Town",
      "createdAt": "2024-04-06T12:30:45Z",
      "updatedAt": "2024-04-06T12:30:45Z"
    }
    ,
  });
  return (
    <div>
      <h1>API Pages Test</h1>
      <div>
        <h2>QR</h2>
        <img src={qrData} />
      </div>
    </div>
  );
};
