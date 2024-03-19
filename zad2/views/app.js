const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    
    console.log(path.join(__dirname,'home.html'));

    res.sendFile(path.join(__dirname, 'home.html'));
    

});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});