const path = require('path');
const fs = require('fs');
var crypto = require('crypto');
let express = require('express');

var app = express();
const bodyParser = require('body-parser');
var querystring = require("querystring");
var multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(express.static('./static'));//设置静态文件路径

app.post('/v1/upload', multer({ dest: 'mock/upload/' }).array('video', 2), (req, res, next) => {
	console.log('req.body--->', req.body);
	console.log('req.file--->', req.file);
});
app.post('/v1/signon', (req, res, next) => {
	res.status(200).json({
		name: "signon",
		age: 12
	});
});
app.all('*', (req, res, next) => {
	console.log('***I am a APIServer***', req.path);
	var filePath = `./mock/${req.path}/index.json`;
	if (fs.existsSync(filePath)) {
		let data = fs.readFileSync(filePath, { encoding: 'utf8' });
		console.log('data-->', JSON.parse(data));
		res.json(JSON.parse(data));
	}
	else {
		next();
	}
});

// app.use(express.static('./dist'));
// app.get('/', (req, res) => {
// 	res.sendfile('./dist/index.html');
// });

// app.post('/v1/signon', (req, res) => {
// 	res.json({
// 		msgCode: 0,
// 		msgText: 'success',
// 		login: true
// 	});
// });
app.use(function (req, res, next) {
	var err = new Error('NOT FOUND');
	err.status = 404;
	next(err);
})
if (app.get('env') === 'development') {
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.json(err);
	});
}
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.json(err);
});
app.listen(9000, function () {
	console.log('App listening on port 9000!');
});