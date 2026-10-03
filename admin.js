const defaults=[
{id:1,cat:"Coffee",name:"Cappuccino",desc:"Double espresso, silky milk foam.",price:22,icon:"☕"},
{id:2,cat:"Coffee",name:"Café Noir",desc:"Rich Moroccan-style black coffee.",price:16,icon:"☕"},
{id:3,cat:"Tea",name:"Moroccan Mint Tea",desc:"Fresh mint, green tea & a touch of sugar.",price:18,icon:"🫖"},
{id:4,cat:"Tea",name:"Tea & Chebakia",desc:"Mint tea served with traditional pastry.",price:22,icon:"🍵"},
{id:5,cat:"Pastries",name:"Msemen",desc:"Warm layered Moroccan flatbread with honey.",price:12,icon:"🥞"},
{id:6,cat:"Pastries",name:"Almond Croissant",desc:"Buttery pastry with almond cream.",price:18,icon:"🥐"},
{id:7,cat:"Breakfast",name:"Dar Zayna Breakfast",desc:"Msemen, eggs, olives, cheese & tea.",price:42,icon:"🍳"},
{id:8,cat:"Breakfast",name:"Avocado Toast",desc:"Sourdough, avocado, poached egg & herbs.",price:38,icon:"🥑"},
{id:9,cat:"Dessert",name:"Cheesecake",desc:"Creamy vanilla cheesecake, seasonal fruit.",price:30,icon:"🍰"}];
function login(){if(document.getElementById("password").value==="admin123"){sessionStorage.dz=1;show()}else document.getElementById("err").textContent="Incorrect password."}
function show(){document.getElementById("login").classList.add("hidden");document.getElementById("app").classList.remove("hidden");render()}
function logout(){sessionStorage.removeItem("dz");location.reload()}
function data(){try{return JSON.parse(localStorage.getItem("dz_menu"))||defaults}catch{return defaults}}
function render(){let d=data();document.getElementById("count").textContent=d.length;document.getElementById("avg").textContent=Math.round(d.reduce((a,x)=>a+Number(x.price),0)/d.length)+" DH";document.getElementById("rows").innerHTML=d.map((x,i)=>`<tr><td><input class="name" value="${esc(x.name)}" data-i="${i}" data-k="name"></td><td><input value="${esc(x.cat)}" data-i="${i}" data-k="cat"></td><td><input value="${esc(x.desc)}" data-i="${i}" data-k="desc"></td><td><input type="number" min="0" value="${x.price}" data-i="${i}" data-k="price"></td><td><button class="delete" onclick="removeItem(${i})">Delete</button></td></tr>`).join("");document.querySelectorAll("input[data-i]").forEach(el=>el.oninput=()=>{let d=data(),i=+el.dataset.i,k=el.dataset.k;d[i][k]=k==="price"?Number(el.value):el.value;localStorage.setItem("dz_menu",JSON.stringify(d));document.getElementById("saved").textContent="Unsaved edits are stored locally.";document.getElementById("avg").textContent=Math.round(d.reduce((a,x)=>a+Number(x.price),0)/d.length)+" DH"})}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function addItem(){let d=data();d.push({id:Date.now(),cat:"Coffee",name:"New item",desc:"Add a description.",price:20,icon:"☕"});localStorage.setItem("dz_menu",JSON.stringify(d));render()}
function removeItem(i){if(confirm("Delete this menu item?")){let d=data();d.splice(i,1);localStorage.setItem("dz_menu",JSON.stringify(d));render()}}
function save(){localStorage.setItem("dz_menu",JSON.stringify(data()));document.getElementById("saved").textContent="✓ Changes saved successfully.";setTimeout(()=>document.getElementById("saved").textContent="All changes are saved in this browser.",1800)}
if(sessionStorage.dz==="1")show();