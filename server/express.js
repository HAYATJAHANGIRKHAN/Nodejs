const http = require('http')

const PORT = 3033;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    //Home page
    //About page
    //Contact page
    //Product page
    //Rest...> Error

    if (req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-TYPE', 'text/plan');
        // res.setHeader('Content-TYPE','application/json');
        res.end('Node server created by Hayat jahangir khan!')
        // res.end(JSON.stringify({error: "server Error"}));   


    } else if (req.url == '/About') {
        res.statusCode = 200;
        res.setHeader('Content-TYPE', 'text/plan');
        // res.setHeader('Content-TYPE','application/json');
        res.end('About Page!')

    } else if (req.url == '/Contact') {
        res.statusCode = 200;
        res.setHeader('Content-TYPE', 'text/plan');
        // res.setHeader('Content-TYPE','application/json');
        res.end('Contact page!')

    } else if (req.url == '/Product') {
        const options = {
            hostname: "fakestoreapi.com",
            path: '/product/1',
            method: 'GET'
        }
        const apiReq = http.request(options, (apiRes) => {
            apiRes.on("data", (data) => {
                res.statusCode = 200;
                // res.setHeader('Content-TYPE','text/plan');
                res.setHeader('Content-TYPE', 'application/json');
                // res.end('Node server created by Hayat jahangir khan')
                res.end(data.toString());

            })
        });
        apiReq.on("error", () => {
            console.log(e);
        });
        apiReq.end();


    } else {
        res.statusCode = 500;
        res.setHeader('Content-TYPE', 'text/plan');
        // res.setHeader('Content-TYPE','application/json');
        res.end('server Error!')

    }

    // // res.statusCode=200;
    // res.statusCode = 500;
    // // res.setHeader('Content-TYPE','text/plan');
    // res.setHeader('Content-TYPE', 'application/json');
    // // res.end('Node server created by Hayat jahangir khan')
    // res.end(JSON.stringify({ error: "server Error" }));

});

server.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`);

})