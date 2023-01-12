export const currentUser = () => {
  //TODO: LocalStoreAge Data
  const token = localStorage.getItem('userData')
  const logInName = JSON.parse(token)
  const currentUserArray = []
  let currentUserObj = { first_name: logInName.role_name, u_id: logInName.u_id }
  currentUserArray.push(currentUserObj)

  return currentUserArray
}
