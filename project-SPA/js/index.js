import Router from './router.js'
//mapeamento de rotas 

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/about', "/pages/about.html")
router.add('/contato', "/pages/contato.html")
router.add(404, "/pages/404.html")


//const routes ={
 //   "/": "/pages/home.html",
   // "/about": "/pages/about.html",
    //"/contato": "/pages/contato.html",  
    //404: "/pages/404.html",
    //}

//handle()
//window.onpopstate = () => handle()
//window.route = () => route()