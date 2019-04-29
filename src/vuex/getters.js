export  default {
  changePeople:(state)=>{
    return state.people.filter(item=>{
      if(item.age>30){
        return true
      }
    })
  },
  count: (state) => {
    return state.count
  }
}
