import { getPokemons } from '../services/api'
import { limit } from '../util'
import qs from 'querystring'

const list = {
  state: {
    count: 0,
    next: null,
    previous: null,
    results: [],
    total: []
  },

  reducers: {
    setPokemansList: (state, payload) => ({
      ...state,
      ...payload
    }),
  },

  effects: dispatch => ({
    async fetchPokemons(params, rootState) {
      const url = rootState.list.next;
      const tempLimit = url === null ? limit : qs.parse(url.split("?")[1]).offset
      const displayLimit = params ? Number(tempLimit) + Number(params) : tempLimit

      let res = await getPokemons(displayLimit)

      if (res) {
        this.setPokemansList(
          {
            count: res.count,
            next: res.next,
            previous: res.previous,
            results: res.results
          })
      }
    },
  }),
}

export default list