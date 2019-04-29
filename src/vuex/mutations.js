export default {
  getParam(state,object){
    state.START_PARMA=object
  },
  changetitle(state,title){
    state.title=title
  },
  changeLogin(state,object){
    localStorage.setItem('login',JSON.stringify(object));
    state.login=object;
  },
  SET_COUNT (state, count) {
    state.count = count
  },
  SET_NUM(state,num){
    state.num=num;
  }
}
