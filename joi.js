const Joi = require('joi');

const schema = {
	username: Joi.string().min(2).max(5).required().error(new Error('username属性没有通过验证'))
}

async function run (){
	try{
		await Joi.validate({username: 'ab'}, schema);
	}catch (ex){
		console.log(ex);
		return;
	}
	console.log('验证通过');
}

run();