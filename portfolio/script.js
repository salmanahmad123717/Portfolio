let ham = document.getElementById("ham")
let nav = document.getElementsByClassName("nav")[0]
let navlist_second=document.getElementsByClassName("nav-list-second")[0]
ham.addEventListener('click',()=>{
    nav.classList.toggle("active-nav")
    navlist_second.classList.toggle("active-nav-list-second")
    if(nav.classList.contains("active-nav")){
        ham.src="cross.svg"
    }
    else{
        ham.src="hamburger.svg" 
    }
})

var typed = new Typed('#profession', {
      strings: ['web Developer','Software Developer'],
      typeSpeed: 150,
      backSpeed:150,
      loop:true
})

let htmlprog=document.getElementsByClassName("html-prog")[0]
let cssprog=document.getElementsByClassName("css-prog")[0]
let jsprog=document.getElementsByClassName("js-prog")[0]
let htmlvalue=document.getElementsByClassName("html-value")[0]
let cssvalue=document.getElementsByClassName("css-value")[0]
let jsvalue=document.getElementsByClassName("js-value")[0]
let h=0;
let c=0;
let j=0;
let html=setInterval(()=>{
h++;
htmlvalue.innerHTML=`${h}%`
htmlprog.style.background=`conic-gradient(rgb(35,201,121) $(3.6*h)deg,rgb(8,10,11) 0deg)`
if(h==90){
    clearInterval(html)
}
})
let css=setInterval(()=>{
c++;
cssvalue.innerHTML=`${c}%`
cssprog.style.background=`conic-gradient(rgb(35,201,121) $(3.6*c)deg,rgb(8,10,11) 0deg)`
if(c==80){
    clearInterval(css)
}
})
let js=setInterval(()=>{
j++;
jsvalue.innerHTML=`${j}%`
jsprog.style.background=`conic-gradient(rgb(35,201,121) $(3.6*j)deg,rgb(8,10,11) 0deg)`
if(j==70){
    clearInterval(js)
}
})

let reactprog=document.getElementsByClassName("inner-react-prog")[0]
let javaprog=document.getElementsByClassName("inner-java-prog")[0]
let pythonprog=document.getElementsByClassName("inner-python-prog")[0]
let dsaprog=document.getElementsByClassName("inner-dsa-prog")[0]
let reactvalue=document.getElementsByClassName("react-value")[0]
let javavalue=document.getElementsByClassName("java-value")[0]
let pythonvalue=document.getElementsByClassName("python-value")[0]
let dsavalue=document.getElementsByClassName("dsa-value")[0]
let r=0;
let ja=0;
let p=0;
let d=0;
let react=setInterval(()=>{
r++;
reactvalue.innerHTML=`${r}%`
reactprog.style.width=`${(60*(1/100))*r}vw`
if (r==80) {
    clearInterval(react)
}
})
let java=setInterval(()=>{
ja++;
javavalue.innerHTML=`${ja}%`
javaprog.style.width=`${(60*(1/100))*ja}vw`
if (ja==50) {
    clearInterval(java)
}
})
let python=setInterval(()=>{
p++;
pythonvalue.innerHTML=`${p}%`
pythonprog.style.width=`${(60*(1/100))*p}vw`
if (p==85) {
    clearInterval(python)
}
})
let dsa=setInterval(()=>{
d++;
dsavalue.innerHTML=`${d}%`
dsaprog.style.width=`${(60*(1/100))*d}vw`
if (d==70) {
    clearInterval(dsa)
}
})

