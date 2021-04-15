const { Article } = require('../../model/article');
module.exports = async (req, res) => {
	req.app.locals.currentLink = 'article';
	const { message, id } = req.query;
	if(id){
		let article = await Article.findOne({_id: id});
		res.render('admin/article-edit.art', {
			message: message,
			article: article,
			link: '/admin/article-modify?id=' + id,
			button: '修改'
		});
	}else{
		res.render('admin/article-edit', {
			message: message,
			link: '/admin/article-add',
			button: '添加'
		});
	}

	// res.render('admin/article-edit.art');
}