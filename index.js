var express = require('express'),
    expressHbs = require('express-handlebars');
    
var port = process.env.PORT || 9000;
var app = express();

app.engine('hbs', expressHbs({extname: 'hbs', defaultLayout: 'main.hbs'}));
app.set('view engine', 'hbs');
// When you put the views in another folder than 'views'
// app.set('views', __dirname + '/other_folder')
app.get('/', function (req, res) {
	res.render('greeting', { title: 'Simple Greeting App', name: 'world'
	});
})
app.get('/:name', function (req, res) {
	res.render('greeting', { title: 'Simple Greeting App', name: req.params.name 
	});
});

app.listen(port, function () {
	console.log('listening on port' + port);
});
