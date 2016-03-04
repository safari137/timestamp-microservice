var express = require('express'),
    app     = express();
    
    app.use(express.static('public'));
    app.set('view engine', 'ejs');
    
    app.get('/:time', function(req, res) {
        var time = req.params.time;
        var unixTime, naturalTime;
        
        unixTime = (isNaN(time)) ? new Date(time) / 1000 : unixTime = time;  
        
        naturalTime = unixTimeToNatural(unixTime);
        
        res.send({unix: +unixTime, natural: naturalTime});
    });
    
    app.get('/', function(req, res) {
       res.render('index.ejs'); 
    });
    
    app.listen(process.env.PORT, function() {
       console.log('Listening on port ' + process.env.PORT); 
    }); 
    
    function unixTimeToNatural(timestamp) {
        var date = new Date(timestamp * 1000);
        
        return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    }
    
    var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

