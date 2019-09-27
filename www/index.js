var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        var ref = window.open('http://tochka.yapoisk.com', '_blank', 'location=no,zoom=no,toolbar=no');
        ref.addEventListener("exit", function(){
          console.log("exitApp");
          navigator.app.exitApp()}
          );
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        var push = PushNotification.init({
            android: {
            },
            ios: {
                alert: "true",
                badge: true,
                sound: 'false'
            }
        });

        /*push.on('registration', function (data) {
            console.log(data.registrationId);
            console.log(data.registrationType);
            document.getElementById("registration").appendChild(document.createTextNode(data.registrationId));
        });
        push.on('notification', function (data) {
            var ul = document.getElementById("pushList");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(data.message));
            ul.appendChild(li);
            console.log(data.message);
            console.log(data.title);
            console.log(data.count);
            console.log(data.sound);
            console.log(data.image);
            console.log(data.additionalData);
        });*/
    }
};

app.initialize();