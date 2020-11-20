importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCybLsa48bxFYHqNHVosvz_M52H8Pe635c",
    authDomain: "chatwork-81276.firebaseapp.com",
    databaseURL: "https://chatwork-81276.firebaseio.com",
    projectId: "chatwork-81276",
    storageBucket: "chatwork-81276.appspot.com",
    messagingSenderId: "65535727055",
    appId: "1:65535727055:web:46c93ff27eacc9ebd0eeba",
    measurementId: "G-CF63Q8GWYD"
});

const messaging = firebase.messaging();