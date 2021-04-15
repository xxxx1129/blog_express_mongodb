const mongoose = require('mongoose');
const Joi = require('joi');
const userSchema = new mongoose.Schema({
	username:{
		type: String,
		require: true,
		minlength: 2,
		maxlength: 20
	},
	email:{
		type:String,
		unique: true,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	role:{
		type:String,
		required:true
	},
	state:{
		type:Number,
		default: 0
	}
});

const User = mongoose.model('User', userSchema);

// User.create({
// 	username:'iteheima',
// 	email:'iteheima@itcast.cn',
// 	password:'123456',
// 	role:'admin',
// 	state:0
// }).then(() => {
// 	console.log('用户创建成功')
// }).catch(() => {
// 	console.log('用户创建失败')
// })
const validateUser = user => {
	const schema = {
		username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合验证规则')),
		email: Joi.string().email().required().error(new Error('邮箱格式不符合要求')),
		password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
		role: Joi.string().valid('normal', 'admin').required().error(new Error('角色值非法')),
		state:Joi.number().valid(0,1).required().error(new Error('状态值非法'))
	};

	return Joi.validate(user, schema);
}


module.exports = {
	User: User,
	validateUser
}