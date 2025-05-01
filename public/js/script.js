//const { error } = require("console");

function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

const socket = io();
let userLocation = null;
let userId = null;

if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        socket.emit("send-location", { latitude, longitude });
    },
        (error) => {
            console.error(error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }

    );
}

const map = L.map("map").setView([0, 0], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Sheryians Coding School"
}).addTo(map);

const markers = {};
const polylines = {};

socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;

    if (!markers[id]) {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
        polylines[id] = L.polyline([[latitude, longitude]], { color: 'blue' }).addTo(map);
    } else {
        markers[id].setLatLng([latitude, longitude]);
        polylines[id].addLatLng([latitude, longitude]);
    }

    if (userLocation) {
        const distance = haversineDistance(userLocation.latitude, userLocation.longitude, latitude, longitude);
        document.getElementById('distance').innerText = `Distance: ${distance.toFixed(2)} km`;
    }

    if (id == userId) {
        map.setView([latitude, longitude]);
    }

    map.setView([latitude, longitude]);
});

socket.on("user-disconnected", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});

function sendLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            socket.emit("send-location", {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        });
    }
}

// Call sendLocation periodically to update location
setInterval(sendLocation, 5000);
