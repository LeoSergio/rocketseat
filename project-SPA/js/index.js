import './router.js'
//mapeamento de rotas 
const routes ={
    "/": "/pages/home.html",
    "/about": "/pages/about.html",
    "/contato": "/pages/contato.html",  
    404: "/pages/404.html",
    }

handle()
window.onpopstate = () => handle()
window.route = () => route()