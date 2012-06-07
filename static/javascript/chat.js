$(function(){
  var socket = io.connect();
    socket.on('message', function (data) {
      $("#messages-list").append("<li>"+ data.message+"</li>");
    });
    
    $("#chat-text").keypress(function(e){
      var code = (e.keyCode ? e.keyCode : e.which);
       if(code == 13) {
         if($("#chat-text").val().trim() != ""){
           socket.emit("message", {message: $("#chat-text").val()})
           $("#chat-text").val("");
         }
       }
    });
});