export  default {
  getParamSync(context,object){
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
       context.commit('getParam',Object)
       return resolve('crm管理系统after')
     },3000)
   })
  },
  changetitleSync({commit},title){
    setTimeout(()=>{
      commit('changetitle',title)
    },3000)
  }
}
