const color = 'blue';

switch(color){
    case 'red':
    console.log('color is red');
    break;
    case 'blue':
    console.log('color is blue');
    break;
    default:
    console.log('color is not red or blue')
}

// switch(new Date().getDay()){
//     case -:
// }

document.querySelector('h1').style.background = 'blue';

const heading = document.querySelector('h1');
heading.style.background = 'green';
heading.style.textAlign = 'center'
heading.onmousedown = function(){
    heading.style.background = 'red';
}
heading.onmouseup = function(){
    heading.style.background = 'blue';
}