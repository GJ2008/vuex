  
  const state=() =>({
    name: 'products'
  })
  const mutations= {
    SAVE_NAME(state, name){
        state.name = name
    }
  }
  const actions= {
    saveName ({ commit }, name) {
        let name1 = name + '但是我中转了一下'
        commit('SAVE_NAME',name1)
    }
  }
  const getters= {
    // saveName ({ commit }, name) {
    //   commit('SAVE_NAME',name)
    // }
  }

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
