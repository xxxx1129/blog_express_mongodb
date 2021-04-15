// 引用express框架
const express = require('express');

// 创建博客展示页面路由
const admin = express.Router();

admin.get('/login', require('./admin/loginPage'));

admin.post('/login', require('./admin/login'));	

admin.get('/user', require('./admin/userPage'));

admin.get('/logout', require('./admin/logout'));

admin.get('/user-edit', require('./admin/user-edit'));

admin.post('/user-edit', require('./admin/user-edit-fn'));

admin.post('/user-modify', require('./admin/user-modify'));

admin.get('/delete', require('./admin/user-delete'));

admin.get('/article', require('./admin/article'));

admin.get('/article-edit', require('./admin/article-edit'));

admin.post('/article-modify', require('./admin/article-modify'));

admin.post('/article-add', require('./admin/article-add'));

admin.get('/article-delete', require('./admin/article-delete'));
	
module.exports = admin;
