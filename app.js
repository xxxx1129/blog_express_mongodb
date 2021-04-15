
// 引用express框架
const express = require('express');
const path = require('path');

const bodyPaser = require('body-parser');

const session = require('express-session');

const template = require('art-template');

const dateFormat = require('dateFormat');

const config = require('config');
// 创建网站服务器
const app = express();

require('./model/connect');

app.use(bodyPaser.urlencoded({extended: false}));

// app.use(bodyPaser.json());

app.use(session({
	secret: 'secret key', 
	saveUninitialized: false, 
	cookie: {
		maxAge: 24 * 60 * 60 * 1000
	}
	})
);

// require('./model/user');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');
app.engine('art', require('express-art-template'));

template.defaults.imports.dateFormat = dateFormat;

//开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')));

console.log(config.get('title'));

console.log(process.env.NODE_ENV);
const home = require('./route/home.js');
const admin = require('./route/admin.js');

app.use('/admin', require('./middleware/loginGuard'))

app.use('/home', home);
app.use('/admin', admin);

app.use((err, req, res, next) => {
	const result = JSON.parse(err);
	// const result = err;
	let params = [];
	for(let attr in result) {
		if(attr != 'path') {
			params.push(attr + '=' + result[attr]);
		}
	}
	res.redirect(`${result.path}?${params.join('&')}`);
})

// 监听端口
app.listen(3000);
console.log('网站服务器启动成功，请访问localhost');