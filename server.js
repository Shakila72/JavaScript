const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');// change to run server html
//   res.end('Hello World');
res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator </title>
    <style>

     .box
     {
         margin: auto;
         border: 3px saddlebrown rgb(58, 54, 54);
         border-style: inset;
         width: 350px;
         height: 400px;
         margin-top: 40px;


     }
     #input-box
     {
         width: 250px;
         margin: 40px;
         height: 30px;
         text-indent: 10px;
     }
     /* #b
    {
        border-style: solid;
    border-width: 30px 20px;
    border-color: rgb(56, 119, 90);
    } */


     #btn
     {
         background-color: rgb(190, 119, 231);
        width: 60px;
        margin-top: 10px;
        font-size: 30px;
        padding: 5px;
        /* padding-left: 10px;
        padding-right: 10px; */
        border-radius: 20px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 4px;
        margin-left: 20px;


      border: none;
     }

     #btn:hover
     {
         background-color: rgb(115, 13, 199);

     }
    </style>
</head>
    <body class="box" >

            <div >
                <input type="text" name="text" id="input-box" >

                <div>
                    <input type="button" name="button" id="btn" value="1">
                    <input type="button" name="button" id="btn" value="2">
                    <input type="button" name="button" id="btn" value="3">
                    <input type="button" name="button" id="btn" value="*">
                </div>
                <div>
                    <input type="button" name="button" id="btn" value="4">
                    <input type="button" name="button" id="btn" value="5">
                    <input type="button" name="button" id="btn" value="6">
                    <input type="button" name="button" id="btn" value="/">
                </div>
                <div>
                    <input type="button" name="button" id="btn" value="7">
                    <input type="button" name="button" id="btn" value="8">
                    <input type="button" name="button" id="btn" value="9">
                    <input type="button" name="button" id="btn" value="-">
                </div>
                <div>
                    <input type="button" name="button" id="btn" value="0">
                    <input type="button" name="button" id="btn" value=".">
                    <input type="button" name="button" id="btn" value="+">
                    <input type="button" name="button" id="btn" value="=">
                </div>
        </div>



    </body>
</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});