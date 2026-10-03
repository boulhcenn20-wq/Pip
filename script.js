const defaultMenu=[
{id:1,cat:"Coffee",name:"Cappuccino",desc:"Double espresso, silky milk foam.",price:22,icon:"☕"},
{id:2,cat:"Coffee",name:"Café Noir",desc:"Rich Moroccan-style black coffee.",price:16,icon:"☕"},
{id:3,cat:"Tea",name:"Moroccan Mint Tea",desc:"Fresh mint, green tea & a touch of sugar.",price:18,icon:"🫖"},
{id:4,cat:"Tea",name:"Tea & Chebakia",desc:"Mint tea served with traditional pastry.",price:22,icon:"🍵"},
{id:5,cat:"Pastries",name:"Msemen",desc:"Warm layered Moroccan flatbread with honey.",price:12,icon:"🥞"},
{id:6,cat:"Pastries",name:"Almond Croissant",desc:"Buttery pastry with almond cream.",price:18,icon:"🥐"},
{id:7,cat:"Breakfast",name:"Dar Zayna Breakfast",desc:"Msemen, eggs, olives, cheese & tea.",price:42,icon:"🍳"},
{id:8,cat:"Breakfast",name:"Avocado Toast",desc:"Sourdough, avocado, poached egg & herbs.",price:38,icon:"🥑"},
{id:9,cat:"Dessert",name:"Cheesecake",desc:"Creamy vanilla cheesecake, seasonal fruit.",price:30,icon:"🍰"}
];
function getMenu(){try{return JSON.parse(localStorage.getItem("dz_menu"))||defaultMenu}catch{return defaultMenu}}
function renderMenu(cat="All"){
 const items=getMenu().filter(x=>cat==="All"||x.cat===cat);
 document.querySelector("#menuGrid").innerHTML=items.map(x=>`<article class="menu-card"><div class="dish-icon">${x.icon}</div><h3>${x.name}</h3><p>${x.desc}</p><span class="price">${x.price} DH</span></article>`).join("");
}
const cats=["All",...new Set(getMenu().map(x=>x.cat))];
document.querySelector("#filters").innerHTML=cats.map((c,i)=>`<button class="filter ${i===0?"active":""}" data-cat="${c}">${c}</button>`).join("");
document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderMenu(b.dataset.cat)});
renderMenu();