const { Article } = require('../../model/article');
const { Comment } = require('../../model/comment');
module.exports = async (req, res) => {
	const id = req.query.id;
	let article = await Article.findOne({_id: id});
	let comment = await Comment.find({aid: id});
	// res.send(article);
	// res.send('欢迎来到博客文章详情页面');
	res.render('home/article', {
		article: article,
		comment: comment
	})
}