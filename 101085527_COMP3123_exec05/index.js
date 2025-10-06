const express = require('express');
const path = require('path')
const mongoose = require('mongoose')
const app = express();

app.use(express.json());
const userRouter = require('./routes/users');

// MongoDB
const MONGODB_URI = 'mongodb+srv://ebrahimalserri_db_user:Admin1912@cluster0.xat1qbk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URI)
.then(() => console.log('MongoDB Connected Successfully'))
.catch(err => console.error('MongoDB Connection Error:', err))


app.use('/api/v1/user', userRouter);

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
app.get('/home', (req,res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});


/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err,req,res,next) => {
  res.status(500).send('Server Error');
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
console.log('Web Server is listening at port '+ PORT);
});