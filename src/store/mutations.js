export default {
  setLoginResponse(state, { message }){
    state.loginResponse = message
  },
  clearLoginResponse(state){
    state.loginResponse = null
  },
  setSearchResult(state, payload){
    state.searchResult = payload
  }
}
