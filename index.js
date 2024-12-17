import express from `express`
//importing express module 


const app = express();

//define the server 
const port = 3000;
//define the port the server is located 
app.get('/', (req , res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log("Server is running on https://localhost:3000")
})

//landing 'page' it runs wiht welcome message "Hello World!"




//port on the server that listens for requests 