import * as types from './getter-types'

const mutations = {
  [types.SET_SINGER](state,singer) {
    state.singer = singer
    console.log(state)
  }
}

export default mutations
