function ageInDays(){
  let birthyear = prompt('What is your birth year: ');

  let age = (2023 - birthyear)*365;

  let h1 = document.createElement('h1');
  let textAnswer = document.createTextNode('You Are '+age+' Days Old');
  h1.setAttribute('id','ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1)

}
function reset(){
  document.getElementById('ageInDays').remove();
}