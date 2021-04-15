const { Article } = require('../../model/article');
const pagination = require('mongoose-sex-page');
module.exports = async (req, res) => {
	const page = req.query.page
	let result = await pagination(Article).page(page).size(2).display(5).find().exec();
	// res.send(result);
	// return;
	// res.send('欢迎来到博客首页');
	res.render('home/default', {
		result: result
	});
}