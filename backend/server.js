const express = require('express');
const connectDB = require('./config/db');
const colors=require('colors');
const app = express();
const htmlToLatex=require('html-to-latex');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors=require('cors');
app.use(cors());


connectDB();


app.get('/', async(req, res) => {
    res.send('API is running...');
});

app.post('/api', async(req, res) => {
    // console.log("first")
    const html = req.body.html;
    const tex = await htmlToLatex.convertText(html);
    console.log(tex);
    res.send(tex);
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('Server is running on port '.green, `http://localhost:${PORT}`.red);
});
