    // push data 
    var config = {
        apiKey: "AIzaSyC0WYBZXd1mWh5mivzkWIC9S9vIyLlxOjg",
        authDomain: "employee-table-24297.firebaseapp.com",
        databaseURL: "https://employee-table-24297.firebaseio.com",
        projectId: "employee-table-24297",
        storageBucket: "employee-table-24297.appspot.com",
        messagingSenderId: "752617440618"
    };

    firebase.initializeApp(config);

    // Get a reference to the database service
    var database = firebase.database();

    // initiate jquery
    $(document).ready(function() {

        // when submit button clicked
        $("#submit").on("click", function(event) {

            // prevent form submission
            event.preventDefault();

            // data submission test
            console.log("test")

            // get inputs and store in variables
            var addName = $("#input-name").val().trim();
            var addRole = $("#input-role").val().trim();
            var addStart = new Date($("#input-start").val()).getTime();
            var addRate = $("#input-rate").val().trim();

            // push inputs to firebase database
            database.ref("/employees").push({

                name: addName,
                role: addRole,
                start: addStart,
                rate: addRate

            });

        });

        // show children of employees and key in console log
        database.ref("/employees").on("child_added", function(snapshot) {

            console.log(snapshot.val());

            console.log(snapshot.getKey());
            var tr = $("<tr>");
            var nameTD = $("<td>");
            nameTD.html(snapshot.val().name)
            tr.append(nameTD);
            $("#tbod").append();
        });

    })