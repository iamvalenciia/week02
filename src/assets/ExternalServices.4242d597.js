const s="http://server-nodejs.cit.byui.edu:3000/";async function n(a){const t=await a.json();if(a.ok)return t;throw{name:"servicesError",message:t}}class c{constructor(t){}async getData(t){const e=await fetch(s+`products/search/${t}`);return(await n(e)).Result}async findProductById(t){const e=await fetch(s+`product/${t}`);return(await n(e)).Result}async checkout(t){const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return await fetch(s+"checkout/",e).then(n)}}export{c as E};
