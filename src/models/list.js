import { getPokemons } from '../services/api'
import { initOffset } from '../util'
import qs from 'querystring'

const list = {
  state: {
    count: 0,
    offset: 0,
    results: [],
  },

  reducers: {
    setPokemansList: (state, payload) => ({
      ...state,
      count: payload.count,
      offset: payload.next === null ? initOffset : Number(qs.parse(payload.next.split("?")[1]).offset),
      results: payload.results
    }),
  },

  effects: dispatch => ({
    async fetchPokemons(params, rootState) {

      let res = await getPokemons(params)

      if (res) {
        this.setPokemansList(res)
      }
    },
  }),
}

export default list