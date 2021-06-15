export default({app,redirect}) => {
  if(app.$auth.loggedIn){
    if(app.$auth.$state.user['is_admin']){
    }else{
      return redirect('/');
    }
  }else{
    return redirect('/');
  }
}
