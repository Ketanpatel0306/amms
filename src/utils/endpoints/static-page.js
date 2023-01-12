import { defaults } from './defaults'

export const staticPage = {
  staticList: {
    ...defaults.methods.GET,
    uri: '/api/static-page'
  },
  staticView: {
    ...defaults.methods.GET,
    uri: '/api/static-page/:u_id'
  },
  staticDelete: {
    ...defaults.methods.DELETE,
    uri: '/api/static-page/:u_id'
  },
  staticAdd: {
    ...defaults.methods.POST,
    uri: '/api/static-page'
  },
  staticEdit: {
    ...defaults.methods.PUT,
    uri: '/api/static-page/:u_id'
  },
  staticSlug: {
    ...defaults.methods.GET,
    uri: '/api/slug-details/:slug'
  }
}
