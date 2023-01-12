import { permissions } from '../utils/endpoints/permissions'
import { callApi } from '../utils/api-utils'

export const getPermissions = () => {
  return callApi({ uriEndPoint: permissions.getPermissions })
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

export const getProducts = () => {
  return callApi({ uriEndPoint: permissions.getProducts })
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

export const getCategory = () => {
  return callApi({ uriEndPoint: permissions.getCategory })
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}
