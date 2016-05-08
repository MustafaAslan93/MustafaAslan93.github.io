var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
    response.setHeader('content-type', 'text/html');
    var highScores = fs.readFileSync("game/highScores.txt").toString();
    var highScoresLines = highScores.split("\n");
    var highScoresArr = [];
    for (var i = 1; i < highScoresLines.length; i++) {
        var highScoresLinesSplit = highScoresLines[i].split(',');
        highScoresArr[highScoresLinesSplit[0]] = parseInt(parseInt(highScoresLinesSplit[1]));
    }
    if (request.method == 'GET') {
        var getElements = request.url.split('?');
        if (getElements.length >= 2) {
            getElements = getElements[1].split('&');
            var name = getElements[0].split('=')[1];
            var score = parseInt(getElements[1].split('=')[1]);
            if (highScoresArr[name] == null) {
//                highScoresArr[name] = score;
                fs.appendFileSync('game/highScores.txt', '\n' + name + ',' + score);
                response.write('Thank you for playing. Your score is ' + score);
                response.write('<br/>');
//                var names = highScoresArr.keys();
            } else {
                if (highScoresArr[name] < score) {
                    response.write('score is higher ' + score);
                    response.write('<br/>');
                    highScoresArr[name] = score;
                    fs.unlinkSync('game/highScores.txt');
                    for (var listName in highScoresArr) {
                        fs.appendFileSync('game/highScores.txt',
                                listName + ',' + highScoresArr[listName] + '\n');
                    }

                } else {
                    response.write('score is not higher ' + score);
                    response.write('<br/>');
                }
            }
            for (var listName in highScoresArr) {
                response.write(listName + ': ' + highScoresArr[listName]);
                response.write('<br/>');
            }
        }
    }
    response.end();
}).listen(8080);
console.log('Listening on port 8080...');