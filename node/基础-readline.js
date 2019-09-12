
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('你如何看待 Node.js 中文网？', (answer) => {
  // TODO：将答案记录在数据库中。
  console.log(`感谢您的宝贵意见：${answer}`);

  rl.close();
});


////////////////////////////////////////////////////////////////////////////////


var readline = require('readline');
var  rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Test> ');
rl.prompt();

rl.on('line', function(line) {
    switch(line.trim()) {
        case 'copy':
            console.log("复制");
            break;
        case 'hello':
            console.log('world!');
            break;
        case 'close':
            rl.close();
            break;
        default:
            console.log('没有找到命令！');
            break;
    }
    rl.prompt();
});

rl.on('close', function() {
    console.log('bye bye!');
    process.exit(0);
});

////////////////////////////////////////////////////////////////////////////////

var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
var favFood = readlineSync.question('What is your favorite food? ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');


////////////////////////////////////////////////////////////////////////////////