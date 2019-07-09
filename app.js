const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>hello world</h1>');
});

const PORT =  process.env.PORT || 80;

app.listen(PORT,() => console.log(`Server running on port ${PORT}`));