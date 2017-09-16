

console.log('inside the actions file');

export const pushtext = ({ commit }, e) => {
  commit('pushtext', e.target.value)
}
