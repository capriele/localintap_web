importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
//importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-analytics.js");
//importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyCN6DErymw-W_wUm2EahWiaB2OERl3Kab8",
    authDomain: "flutterrestaurant-b1f23.firebaseapp.com",
    databaseURL: "https://flutterrestaurant-b1f23.firebaseio.com",
    projectId: "flutterrestaurant-b1f23",
    storageBucket: "flutterrestaurant-b1f23.appspot.com",
    messagingSenderId: "489841408668",
    appId: "1:489841408668:web:b8d6e092070b70ef28cb59",
    measurementId: "G-TR4VMTTYJG"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    //console.log('Received background message ', payload);

    const notificationData = payload.data;
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    if("body" in notificationData && "title" in notificationData)
    {
      notificationOptions.body = notificationData["body"];
      self.registration.showNotification(notificationData["title"], notificationOptions);
    } 
    else 
    {
      self.registration.showNotification(notificationTitle, notificationOptions);
    }
});