$( document ).ready(function(){
    var socket = io();

    socket.on('pp', function(data){      
        var ctx = $("#myChart").get(0).getContext("2d");
        //var myNewChart = new Chart(ctx);
        new Chart(ctx).Bar(data);
    });
    socket.on('pd', function(data){      
        var ctx = $("#myChart2").get(0).getContext("2d");
        //var myNewChart = new Chart(ctx);
        new Chart(ctx).Line(data);
    });

    $('#refresh').click(function(){
        console.log("geklikt");
        socket.emit("refresh");
    });
});

