var app = angular.module('origami.contact', []);

app.controller('contactController', function($scope) {
    var config = {
        apiKey: "AIzaSyBjTWiHJDTNdE_l_g4sn_JEoFBAWcGm3UI",
        authDomain: "origami-contact-form-submits.firebaseapp.com",
        databaseURL: "https://origami-contact-form-submits.firebaseio.com",
        projectId: "origami-contact-form-submits",
        storageBucket: "origami-contact-form-submits.appspot.com",
        messagingSenderId: "59085965383"
    };
    //firebase.initializeApp(config);

    var messagesRef = firebase.database().ref('messages');





    $scope.submitContact = function() {
        alert('clicked')
        saveMessage(getIdVal('fName'), getIdVal('lName'), getIdVal('company'), getIdVal('email'), getIdVal('reason'), getIdVal('current-url'), getIdVal('message'))
    };





    function saveMessage(fName, lName, company, email, reason, currentURL, message) {
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            firstName: fName,
            lastName: lName,
            company: company,
            email: email,
            reason: reason,
            currentURL: currentURL,
            message: message
        })
    }










    function getIdVal(id) {
        return document.getElementById(id).value;
    }





})