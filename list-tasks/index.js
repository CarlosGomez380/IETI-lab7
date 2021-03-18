module.exports = async function (context, req) {
    context.log('Getting list of tasks');

    const responseMessage = [{
		"id": 1,
        "email": "carlona@gmail.com",
        "content": "Hacer laboratorio IETI",
        "dueDate": "15/03/2021"
    },{
		"id": 2,
        "email": "giovanni@gmail.com",
        "content": "Sacar la basura",
        "date": "16/03/2021"
    },{
		"id": 3,
        "email": "santiago@gmail.com",
        "content": "Comprar gafas",
        "date": "16/03/2021"
    }];

    context.res = {
        status: 200,
        body: responseMessage
    };
}