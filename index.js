const express = require('express');
const app = express();


const port = process.env.PORT;

app.use(express.static('public'));

app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
})

app.listen(process.env.PORT, function(){
    console.log('Now listening for requests on port ' + process.env.PORT + '!');
});