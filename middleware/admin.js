export default ({ app, redirect }) => {
  if (app.$auth.loggedIn) {
    if (app.$auth.$state.user['is_admin']) {

    } else if(app.$auth.$storage.getCookie('is_admin')==1){

    } else {
      return redirect('/dashboard')
    }
  } else {
    return redirect('/')
  }
}
