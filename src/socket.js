import { io } from "socket.io-client";

const URL = "http://localhost:8080";

const socket = io(URL, {
    path: "/socket.io",
    reconnection: false,
});

// const socket = io("//url", {
//     transports: ['websocket'],
// });


// const socket = io("http://domainname:8080", {
//     withCredentials: true,
//     extraHeaders: {
//         "my-custom-header": "abcd"
//     }
// });




export default socket