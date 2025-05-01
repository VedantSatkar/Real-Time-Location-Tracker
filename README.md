```markdown
# 📍 Real-Time Location Tracker

A responsive **Real-Time Location Tracking Application** built using **Leaflet.js** and **Socket.IO**. The application displays dynamic geolocation updates on an interactive map interface, ideal for fleet tracking, delivery systems, or collaborative real-time navigation.



---

## 🚀 Features

- 📡 Real-time geolocation tracking using **Socket.IO**
- 🗺️ Interactive map rendering with **Leaflet.js**
- 📱 Fully responsive design – works seamlessly on mobile and desktop
- 📍 Dynamic markers for updating location
- 🌍 OpenStreetMap integration for map tiles
- 🧭 Smooth location updates using WebSockets

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Mapping:** [Leaflet.js](https://leafletjs.com/)
- **Real-time Communication:** [Socket.IO](https://socket.io/)
- **Backend:** Node.js (if used)
- **Others:** OpenStreetMap, Express.js (optional)

---

## 📦 Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/VedantSatkar/Real-Time-Location-Tracker.git
cd Real-Time-Location-Tracker
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm start
```

> Make sure ports `3000` (frontend) and `5000` or `8080` (backend/socket server) are available.

---

## 🧪 Usage

- Open your browser and go to `http://localhost:3000`
- Open the same URL on another browser/device to simulate multiple clients
- Watch the real-time updates on both screens as location changes!

---

## 📁 Project Structure

```
Real-Time-Location-Tracker/
│
├── public/                # Static files (HTML, JS, CSS)
├── server.js              # Node.js server (Socket.IO setup)
├── package.json           # Node project metadata
├── README.md              # You're here!
```

---

## 📷 Output Screenshot

Here’s a preview of the working application:

![Map View](Screenshot%202025-05-01%20114908.png)

---

## 🔐 Environment Variables

> *(Only if used)*  
If you have API keys or environment configs, create a `.env` file in the root directory:

```env
PORT=3000
SOCKET_PORT=5000
```

---

## 🚀 Deployment

You can deploy this app using platforms like:

- **Render**
- **Vercel**
- **Netlify**
- **Heroku**

> Ensure that the Socket.IO server is publicly accessible and CORS is configured correctly.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Added feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Create a Pull Request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [Leaflet.js](https://leafletjs.com/)
- [Socket.IO](https://socket.io/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- Inspired by real-world use cases in delivery and logistics

---

## 📬 Contact

**Vedant Satkar**  
📧 [vedantssatkar@gmail.com](mailto:vedantssatkar@gmail.com)  
🔗 [LinkedIn](https://linkedin.com/in/vedant-satkar-731bb2298)  
💻 [GitHub](https://github.com/VedantSatkar)

---
