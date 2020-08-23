import { init } from '@rematch/core';
import loadingPlugin from '@rematch/loading'
import { detail, list } from '../models';

const store = init({
  models: {
    detail,
    list,
  },
  plugins: [loadingPlugin()],
})

export default store;