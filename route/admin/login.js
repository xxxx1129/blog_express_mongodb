const { User } =require('../../model/user');
module.exports = async (req, res) => {
	// res.send(req.body);
	const {email, password} = req.body;
	if (email.trim().length == 0 || password.trim().length == 0) {
		// return res.status(400).send('<h4>邮件地址或者密码错误！</h4>')
		return res.status(400).render('admin/error', {msg: '邮件地址或者密码错误！'});
	}
	let user = await User.findOne({email: email});
	if(user){
		if(password == user.password) {
			req.session.username = user.username;
			// res.send('登录成功');
			req.session.role = user.role;
			req.app.locals.userInfo = user;
			if(user.role == 'admin'){
				res.redirect('/admin/user');
			}else{
				res.redirect('/home/');
			}
			
		} else{
			res.status(400).render('admin/error', {msg: '邮箱地址或者密码错误'});
		}
	} else{
		res.status(400).render('admin/error', {msg: '邮箱地址或者密码错误'});
	}
}

// module.exports = login;