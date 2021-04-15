const { Article } = require('../../model/article');
// const formidable = require('formidable');
module.exports = async (req, res) => {
	const body = req.body;
	// const { title, publishDate, cover, content } = req.body;
	const id = req.query.id;
	let article = await Article.findOne({_id: id});
	await Article.updateOne({_id: id}, body);
	res.redirect('/admin/article');
	// res.send(req.body);
}