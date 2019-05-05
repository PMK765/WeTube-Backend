
alert("Hello");
// (function() {

// console.log("CHAT LOADED");
//             var element = function(id) {
//                 return document.getElementById(id);
//             }
//             //Get elements
//             var status = element('status');
//             var messages = element('messages');
//             var textarea = element('textarea');
//             var username = element('username');
//             var clearBtn = element('clear');

//             //Set default status
//             var statusDefault = status.textContent;

//             var setStatus = function(s){
//                 //Set the status
//                 status.textContent = s;
//                 if(s !== statusDefault) {
//                     var delay = setTimeout(function(){
//                         setStatus(statusDefault);
//                     }, 4000);
//                 }
//             }

//             //Connect to socket.io
//             var socket = io.connect('http://127.0.0.1:4000');

//             //Check for connection
//             if(socket !== undefined) {
//                 console.log("Connected to Socket...");

//                 //Handle output
//                 socket.on('output', function(data) {
//                     //console.log('data');
//                     //console.log(data);
//                     if(data.length) {
//                         for(let i = 0 ; i < data.length; i++) {
//                             //Build out the message div
//                             var message = document.createElement('div');
//                             message.setAttribute('class', 'chat-message');
//                             message.textContent = data[i].name+": "+data[i].message;
//                             messages.appendChild(message);
//                             //Switch this so chat builds downward instead
//                             //messages.insertBefore(message, messages.firstChild);
//                             messages.insertBefore(message, messages.lastChild);
//                         }
//                     }
//                 });

//                 //Get Status from Server
//                 socket.on('status', function (data) {
//                     //Get message status
//                     setStatus((typeof data === 'object') ? data.message : data);

//                     //If status is clear, clear text
//                     if(data.clear) {
//                         textarea.value = '';
//                     }
//                 });

//                 //Handle Input
//                 textarea.addEventListener('keydown', function (event) {
//                     if(event.which === 13 && event.shiftKey == false) {
//                         console.log("Pressed Enter");
//                         //emit to server input
//                         socket.emit('input', {
//                             name: username.value,
//                             message: textarea.value
//                         });
//                         textarea.value = '';
                        
//                         event.preventDefault();
//                     }
//                 });

//                 //Handle chat clear
//                 clearBtn.addEventListener('click', function() {
//                     //socket.emit('clear');
//                     alert('CLEAR CLICKED');
//                 });

//                 //Clear Message
//                 socket.on('cleared', function() {
//                     messages.textContent = '';
//                 });

//             }


//     })();
