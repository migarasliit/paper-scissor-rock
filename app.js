 let you;
 let yourScore = 0;
 let bot;
 let botScore = 0;

 let choices = ['rock','paper','scissor'];

 window.onload = function(){
  for(let i=0 ; i < 3; i++ ){
    let choice = document.createElement('img');

    choice.id = choices[i];

    choice.src = choices[i]+'.jpg';
    choice.addEventListener('click',selectChoice);
    document.getElementById('choices').append(choice);
  }
 } 
function selectChoice(){
  you = this.id;
  document.getElementById('your-choice').src = you + '.jpg';

  bot = choices[Math.floor(Math.random()*3)];
  document.getElementById('bot-choice').src = bot+'.jpg';

  //chek for winner
  if(you == 'rock' && bot == 'scissor'){
    yourScore += 1 ;
  }
  else if(you == 'rock' && bot == 'paper'){
    botScore += 1 ;
  }
  else if(you == 'paper' && bot == 'scissor'){
    botScore += 1 ;
  }
  else if(you == 'paper' && bot == 'rock'){
    yourScore += 1 ;
  }
  else if(you == 'scissor' && bot == 'rock'){
    botScore += 1 ;
  }
  else if(you == 'scissor' && bot == 'paper'){
    yourScore += 1 ;
  }
  else{
    yourScore += 1;
    botScore += 1;
  }
  document.getElementById('your-score').innerHTML = yourScore;
  document.getElementById('bot-score').innerHTML = botScore;

}