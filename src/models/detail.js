import { getPokemonDetail } from '../services/api'

const detail = {
    state: {
        loading:false,
        name: null,
        image:null,
        baseExperience: null,
        isDefault: false,
        height: 0,
        weight: 0,
        types: []
    },
    reducers: {
        setPokemansDetail: (state, payload) => ({
            ...state,
            ...payload
        }
        )
    },
    effects: dispatch => ({
        async fetchPokemonDetail(params, rootState) {
            let res = await getPokemonDetail(params)
            if (res) {
                this.setPokemansDetail({
                    loading:true,
                    name: res.name,
                    image:res.sprites.other.dream_world.front_default,
                    baseExperience: res.base_experience,
                    isDefault: res.is_default.toString(),
                    height: res.height,
                    weight: res.weight,
                    types: res.types.map(({ type }) => type.name)
                })
            }

        },
    }),
}

export default detail