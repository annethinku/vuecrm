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
  },
  //是啥意思？ {commit} 这是调用mutation的方法，解构出来的，就想我刚刚在app.vue里面this.$store.commit()这种。
  // 都是操作mutation 有点乱 我看看
  setCount({commit}, count) {
    commit('SET_COUNT', count)
  },
  set_num({commit},num){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        commit('SET_NUM',num)
        resolve('成功改变num');
      },2000)
    })
  }
}
