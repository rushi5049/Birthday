
const text="Happy Birthday! 🎂 May your life be filled with happiness, success and big achievements. Stay blessed Bade Log! 🎉";

let i=0;

function start(){
typeWriter();
}

function typeWriter(){
if(i<text.length){
document.getElementById("message").innerHTML+=text.charAt(i);
i++;
setTimeout(typeWriter,40);
}
}

const canvas=document.getElementById("confetti");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let pieces=[];

for(let i=0;i<120;i++){
pieces.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*6+2,
d:Math.random()*100
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.beginPath();
for(let i=0;i<pieces.length;i++){
let p=pieces[i];
ctx.moveTo(p.x,p.y);
ctx.arc(p.x,p.y,p.r,0,Math.PI*2,true);
}
ctx.fillStyle="white";
ctx.fill();
update();
}

let angle=0;

function update(){
angle+=0.01;
for(let i=0;i<pieces.length;i++){
let p=pieces[i];
p.y+=Math.cos(angle+p.d)+1+p.r/2;
p.x+=Math.sin(angle)*2;

if(p.y>canvas.height){
pieces[i]={x:Math.random()*canvas.width,y:0,r:p.r,d:p.d};
}
}
}

setInterval(draw,20);
