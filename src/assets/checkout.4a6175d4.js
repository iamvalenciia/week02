import{g as c,s as n,r as l,a as u,l as h}from"./utils.2cac89ce.js";import{E as m}from"./ExternalServices.4242d597.js";const d=new m;function p(i){const o=new FormData(i),t={};return o.forEach(function(e,s){t[s]=e}),t}function g(i){return i.map(t=>(console.log(t),{id:t.Id,price:t.FinalPrice,name:t.Name,quantity:1}))}class S{constructor(o,t){this.key=o,this.outputSelector=t,this.list=[],this.itemTotal=0,this.shipping=0,this.tax=0,this.orderTotal=0}init(){this.list=c(this.key),this.calculateItemSummary()}calculateItemSummary(){const o=document.querySelector(this.outputSelector+" #cartTotal"),t=document.querySelector(this.outputSelector+" #num-items");t.innerText=this.list.length;const e=this.list.map(s=>s.FinalPrice);this.itemTotal=e.reduce((s,a)=>s+a),o.innerText="$"+this.itemTotal}calculateOrdertotal(){this.shipping=10+(this.list.length-1)*2,this.tax=(this.itemTotal*.06).toFixed(2),this.orderTotal=(parseFloat(this.itemTotal)+parseFloat(this.shipping)+parseFloat(this.tax)).toFixed(2),this.displayOrderTotals()}displayOrderTotals(){const o=document.querySelector(this.outputSelector+" #shipping"),t=document.querySelector(this.outputSelector+" #tax"),e=document.querySelector(this.outputSelector+" #orderTotal");o.innerText="$"+this.shipping,t.innerText="$"+this.tax,e.innerText="$"+this.orderTotal}async checkout(){const o=document.forms.checkout,t=p(o);t.orderDate=new Date,t.orderTotal=this.orderTotal,t.tax=this.tax,t.shipping=this.shipping,t.items=g(this.list),console.log(t);try{const e=await d.checkout(t);console.log(e),n("so-cart",[]),location.assign("/checkout/success.html")}catch(e){l();for(let s in e.message)u(e.message[s]);console.log(e)}}}h();const r=new S("so-cart",".checkout-summary");r.init();document.querySelector("#zip").addEventListener("blur",r.calculateOrdertotal.bind(r));document.querySelector("#checkoutSubmit").addEventListener("click",i=>{i.preventDefault(),r.checkout()});