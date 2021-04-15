const { Comment } = require('../../model/comment');
module.exports = async (req, res) => {
	// res.send(req.body)
	const{ content, uid, aid } = req.body
	await Comment.create({
		content: content,
		uid: uid,
		aid: aid,
		time: new Date()
	})
	res.redirect('/home/article?id='+ aid);
}