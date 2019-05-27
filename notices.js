const http = require('http');

http.createServer((req, res) => {
	switch(req.url){
		case '/tech':
			res.end("<html><body>Tech Notices!!!</body></html>");
		break;

		case '/reading':
			res.end("<html><body>Read Notices!!!</body></html>");
		break;
		
		default:            
			res.end("<html><body>Notices!!!</body></html>");
		break;
	}
}).listen(9000);