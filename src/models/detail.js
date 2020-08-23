import { getPokemonDetail } from '../services/api'

const detail = {
  state: {
    loading: false,
    name: null,
    image: null,
    baseExperience: null,
    isDefault: false,
    height: 0,
    weight: 0,
    types: []
  },
  reducers: {
    setPokemansDetail: (state, payload) => ({
      ...state,
      loading: true,
      name: payload.name,
      image: payload.sprites.other.dream_world.front_default,
      baseExperience: payload.base_experience,
      isDefault: payload.is_default.toString(),
      height: payload.height,
      weight: payload.weight,
      types: payload.types.map(({ type }) => type.name)
    }
    )
  },
  effects: dispatch => ({
    async fetchPokemonDetail(params, rootState) {
      let res = await getPokemonDetail(params)
      if (res) {
        this.setPokemansDetail(res)
      }

    },
  }),
}

export default detail