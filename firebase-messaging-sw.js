importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');
firebase.initializeApp({
  apiKey: "AIzaSyC_o0SEqTTDfPz9QNj6uupDybfwLrfo1FQ",
  authDomain: "simple-pwa-push-notification.firebaseapp.com",
  databaseURL: "https://simple-pwa-push-notification.firebaseio.com",
  projectId: "simple-pwa-push-notification",
  storageBucket: "simple-pwa-push-notification.appspot.com",
  messagingSenderId: "1049497671670",
  appId: "1:1049497671670:web:501180a55748a03df1d9d7",
  measurementId: "G-Y1GDLEGSJ4"
});
firebase.messaging();
