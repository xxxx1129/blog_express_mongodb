// 引用express框架
const express = require('express');
// 创建博客展示页面路由
const home = express.Router();

home.get('/', require('./home/index'))

home.get('/article', require('./home/article'));

home.post('/comment', require('./home/comment'));

module.exports = home;