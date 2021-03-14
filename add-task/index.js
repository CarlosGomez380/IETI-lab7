
module.exports = async function (context, req) {
    context.log('Adding a task to the planner');
	const { v4: uuidv4 } = require('uuid');	
    const task = req.body;

    // Implement the response
	const newTask = {
		"id": uuidv4(),
		"email": task.email,
        "content": task.content,
        "date": task.date
    }
	
    const responseMessage = { response: newTask};

    context.res = {
        status: 201,
        body: responseMessage
    };
}

