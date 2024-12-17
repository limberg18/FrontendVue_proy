import { createRouter, createWebHistory } from "vue-router";

import Inicio  from './../views/web/Inicio.vue'
import Servicios  from './../views/web/Servicios.vue'
import Nosotros  from './../views/web/Nosotros.vue'
import Login from './../views/auth/Login.vue'
import Perfil from './../views/admin/Perfil.vue'


const routes=[
    { path:'/' , component:Inicio},
    { path:'/servicios' , component:Servicios},
    { path:'/nosotros' , component:Nosotros},
    { path:'/auth/login' , component:Login,meta:{redirectIfAuth:true}},
    { path:'/admin/perfil' ,name:"perfil", component:Perfil,meta:{requireAuth:true}},
   
];

const router=createRouter({
   history:createWebHistory(),
   routes:routes,
});


router.beforeEach((to,from,next)=>{
    console.log(from)
    console.log(to)
    const token=localStorage.getItem('access_token');
  if(to.meta.requireAuth){
    if(!token){
        return next('/auth/login');
    }
    return next();
  }
  if(to.meta.redirectIfAuth && token){
    return next({name:'perfil'});
  }

   return next();
})

export default router;