function forLoop(array){
  for(var i = 0; i <25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
  }
}
return array
}

var sample_arr = [];
console.log(forLoop(sample_arr));


function whileLoop(n){
  while(n>0)
  {console.log(n--)}
  return "done"
}



function maybeTrue() {
  return Math.random() >= 0.5
}
function WhileLoop(array){
let countdown = 100;

while (countdown < 100);

console.log(--countdown);
