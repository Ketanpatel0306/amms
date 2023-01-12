import { defaults } from './defaults'

export const superAdminProfile = {
  viewAdminById: {
    ...defaults.methods.GET,
    uri: '/api/super-admin/:adminID'
  },

  updateAdmin: {
    ...defaults.methods.PUT,
    uri: '/api/super-admin/:adminID',
    headerProps: {
      'Content-Type': 'multipart/form-data'
    }
  }
}
