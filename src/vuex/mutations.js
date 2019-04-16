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
  }
}
