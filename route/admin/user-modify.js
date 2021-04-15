const { User } = require('../../model/user')
module.exports = async (req, res, next) => {
	const { username, email, role, state, password } = req.body;
	// res.send(req.body);
	// return;
	const id = req.query.id;
	let user = await User.findOne({_id: id});
	if(user.password == password){
		await User.updateOne({_id: id}, {
			username:username,
			email: email,
			role: role,
			state: state
		});
		res.redirect('/admin/user');
		// res.send('密码比对成功');
	}else{
		let obj = {path: '/admin/user-edit', message: '密码比对失败，不能进行用户信息的修改', id: id};
		next(JSON.stringify(obj));
		// res.send('密码比对失败');
	}
}