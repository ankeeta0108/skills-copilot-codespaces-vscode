// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set up port
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});

// Set up route
app.post('/comment', function(req, res) {
    // Get comment
    var comment = req.body.comment;
    // Check if comment exists
    if (comment) {
        // Write comment to file
        fs.appendFile('comments.txt', comment + '\n', function(err) {
            if (err) {
                console.log(err);
            }
            res.send('Comment has been saved');
        });
    } else {
        res.send('No comment found');
    }
});