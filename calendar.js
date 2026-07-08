// =====================================
// CALENDARIO DE ALIS 💜
// =====================================

const posts = [

{
day:5,
month:7,
year:2026,
title:"Hola.",
url:"https://admeliorali.blogspot.com/2026/07/hola.html"
},

{
day:7,
month:7,
year:2026,
title:"Hellou HeLLOU",
url:"https://admeliorali.blogspot.com/2026/07/hola-que-tal-como-estas-jsjs.html"
},

{
day:21,
month:7,
year:2026,
title:"Mi dibujo",
url:"https://admeliorali.blogspot.com/"
}

];

const months=[
"Enero","Febrero","Marzo","Abril","Mayo","Junio",
"Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

const days=["L","M","M","J","V","S","D"];

let current=new Date();

function drawCalendar(){

const year=current.getFullYear();
const month=current.getMonth();

const first=new Date(year,month,1);

const last=new Date(year,month+1,0);

let start=first.getDay();

start=(start===0)?6:start-1;

let html=`

<div class="header">

<button onclick="changeMonth(-1)">❮</button>

<div class="month">

${months[month]} ${year}

</div>

<button onclick="changeMonth(1)">❯</button>

</div>

<table>

<tr>

${days.map(d=>`<th>${d}</th>`).join("")}

</tr>

<tr>

`;

for(let i=0;i<start;i++){

html+="<td></td>";

}

for(let d=1;d<=last.getDate();d++){

const post=posts.find(p=>

p.day===d &&
p.month===month+1 &&
p.year===year

);

let cls="";

const today=new Date();

if(
today.getDate()===d &&
today.getMonth()===month &&
today.getFullYear()===year
){

cls="today";

}

if(post){

cls+=" hasPost";

}

html+=`<td class="${cls}"
data-day="${d}">
${post ? `<div class="day-number">${d}</div><span class="heart"></span>` : `<div class="day-number">${d}</div>`}
</td>`;

if((start+d)%7===0 && d!==last.getDate()){

html+="</tr><tr>";

}

}

html+="</tr></table>";

document.getElementById("calendar").innerHTML=html;

addEvents();

}

function changeMonth(n){

current.setMonth(current.getMonth()+n);

drawCalendar();

}// ===============================
// TOOLTIP + CLIC EN LAS ENTRADAS
// ===============================

function addEvents(){

const tooltip=document.getElementById("tooltip");

document.querySelectorAll("#calendar td").forEach(td=>{

const day=parseInt(td.dataset.day);

if(!day) return;

const month=current.getMonth()+1;
const year=current.getFullYear();

const post=posts.find(p=>

p.day===day &&
p.month===month &&
p.year===year

);

if(!post) return;

td.addEventListener("mousemove",e=>{

tooltip.style.display="block";

tooltip.style.left=(e.pageX+15)+"px";

tooltip.style.top=(e.pageY+15)+"px";

tooltip.innerHTML=`
<div style="font-size:15px;">${post.icon} ${post.title}</div>
<div style="font-size:11px;color:#777;margin-top:4px;">
${day}/${month}/${year}
</div>
<div style="margin-top:6px;color:#8d74c8;">
Haz clic para leer →
</div>
`;

});

td.addEventListener("mouseleave",()=>{

tooltip.style.display="none";

});

td.addEventListener("click",()=>{

window.open(post.url,"_blank");

});

});

}

drawCalendar();
