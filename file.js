const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World this is ');
res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datatypes in JavaScript</title>

</head>
<body>


    <script>
        // Datatypes
        // undefined, number, string, boolean, bigint,null, symbol.

        let lenght=16;
        console.log(typeof lenght);//number
        var l=14.5;
        console.log(typeof l);// number
        let name="john";
        console.log(typeof name);
        let x=295218907656n;
        console.log(typeof x);//bigint
        let y;
        console.log(y);//undefined
        let number=true;
        console.log(typeof number);//boolean
        var a=5;

            console.log(a==5);

        var n = null;
        console.log(n * 32);
        var r='string'
        console.log(typeof r)

    </script>
</body>
</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});