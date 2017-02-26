var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var Articles = {
    'article-one' : {
        title : 'Article-One | Vijayasai',
        date : 'Feb 26,2017',
        heading : 'Article One',
        content : ` <p>
                        This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.
                    </p>
                    <p>
                        This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.
                    </p>
                    <p>
                        This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.
                    </p>`
    },
    'article-two' : {
        title : 'Article-Two | Vijayasai',
        date : 'Feb 25,2017',
        heading : 'Article Two',
        content : ` <p>
                        This is the content of my second artile.This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.
                    </p>
                    <p>
                        This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.
                    </p>
                    <p>
                        This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.
                    </p>`
    },
    'article-three' : {
        title : 'Article-Three | Vijayasai',
        date : 'Feb 24,2017',
        heading : 'Article Three',
        content : ` <p>
                        This is the content of my third artile.This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.
                    </p>
                    <p>
                        This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.
                    </p>
                    <p>
                        This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.This is the content of my first artile.
                    </p>`
    }
};

function createTemplate(data){
    
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}        
            </title>
            <meta name="viewport" content="width=display-width initial-scale="/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req,res) {
   counter += 1;
   res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
  // articleName == article-one
  // Articles[articleName] == /. datas contain in the articleName
  var articleName = req.params.articleName;
  res.send(createTemplate(Articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name/:name', function(req,res){
   var name = req.params.name;
   names.push(name);
   // here were JSON comes in (JSON - JavaScript Object Notation)
   res.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
