const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const questionArray = [
  "What's your name? Nicknames are also acceptable :)   ",
  "What's an activity you like doing?   ",
  "What do you listen to while doing that?    ",
  "Which meal is your favourite (eg: dinner, brunch, etc.)    ",
  "What's your favourite thing to eat for that meal?    ",
  "Which sport is your absolute favourite?    ",
  "What is your superpower? In a few words, tell us what you are amazing at!    "
];

const answerArray = [];


rl.question(questionArray[0], (answer) => {
  answerArray[0] = answer;

  rl.question(questionArray[1], (answer) => {
    answerArray[1] = answer;
    
    rl.question(questionArray[2], (answer) => {
      answerArray[2] = answer;
      
      rl.question(questionArray[3], (answer) => {
        answerArray[3] = answer;
        
        rl.question(questionArray[4], (answer) => {
          answerArray[4] = answer;
        
          rl.question(questionArray[5], (answer) => {
            answerArray[5] = answer;
          
            rl.question(questionArray[6], (answer) => {
              answerArray[6] = answer;
              
              console.log(`${answerArray[0]} loves listening to ${answerArray[2]} while ${answerArray[1]}, devouring ${answerArray[4]} for ${answerArray[3]}, prefers ${answerArray[5]} over any other sport, and is amazing at ${answerArray[6]}.`);

              rl.close();
              
            });
          });
        });
      });
    });
  });
});

