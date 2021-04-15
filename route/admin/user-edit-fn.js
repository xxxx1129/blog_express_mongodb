
const { User, validateUser } = require('../../model/user');

module.exports = async (req, res, next) => {
	
	try{
		await validateUser(req.body)
	}catch(e){
		// e.message
		// return res.redirect(`/admin/user-edit?message=${e.message}`)
		return next(JSON.stringify({path: '/admin/user-edit', message: e.message}))
	}

	let user = await User.findOne({email: req.body.email})
	if(user){
		// return res.redirect(`/admin/user-edit?message=邮箱地址已经被占用`)
		return next(JSON.stringify({path: '/admin/user-edit', message: '邮箱地址已经被占用'}))
	}
	// res.send(req.body);
	await User.create(req.body);
	res.redirect('/admin/user');

}
	
