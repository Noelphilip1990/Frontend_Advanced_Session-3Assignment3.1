let apiDetail=
{ baseUrl:'www.google.com',Method:'POST',Request:'Server',Header:'<h1>Hello</h1>',Post:'Yes' };

function apiMethod(arg)
{
	return `baseUrl: ${arg.baseUrl} Method: ${arg.Method} Request: ${arg.Request} Header: ${arg.Header} Post: ${arg.Post}`;
}

console.log(apiMethod(apiDetail));
