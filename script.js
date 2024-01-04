const sounds= document.querySelectorAll('.sound');
const pads=document.querySelectorAll('.pads div');
const animationZone=document.querySelector('.animation-zone')
const colors=[
    'aqua',
    'bisque',
    'red',
    'pink', 
    'blueviolet'
];

for (let i=0; i<pads.length; i+=1){
    pads[i].addEventListener('click', playSound(i));
}
function playBubble(item){
var bubble=document.createElement('div')
animationZone.appendChild(bubble)
bubble.style.backgroundColor=colors[item]
bubble.style.animation="circle_an1 2s linear"
bubble.addEventListener('animationend', function(){animationZone.removeChild(bubble)})
}
function playSound(item){
    return function(){
        if (sounds[item].loop===true){
            sounds[item].loop=false;
            sounds[item].stop()
        }
        else{
            sounds[item].currentTime=0
            sounds[item].play()
            sounds[item].loop=true
            playBubble(item)
            animationZone.appendChild(bubble)
            bubble.style.margin='0px 0px 700px 300px';
        }
    }
}
