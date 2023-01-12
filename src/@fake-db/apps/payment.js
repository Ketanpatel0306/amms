import mock from 'src/@fake-db/mock'

const data = {
  payment: [
    {
      id: 1,
      paymentName: 'Net Banking',

      status: true
    },
    {
      id: 2,
      paymentName: 'cash',

      status: true
    },
    {
      id: 3,
      paymentName: 'cash',

      status: true
    },
    {
      id: 4,
      paymentName: 'debit card',

      status: true
    },
    {
      id: 5,
      paymentName: 'Galen Slixby',

      status: false
    }
  ]
}

// POST: Add new user
mock.onPost('/apps/payment/add-user').reply(config => {
  // Get event from post data
  const user = JSON.parse(config.data).data
  const { length } = data.payment
  let lastIndex = 0
  if (length) {
    lastIndex = data.payment[length - 1].id
  }
  user.id = lastIndex + 1
  data.payment.unshift({ ...user, status: true })

  return [201, { user }]
})

// GET: Updated DATA
mock.onGet('/apps/payment/list').reply(config => {
  const { q = '', role = null, status = null, currentPlan = null } = config.params ?? ''
  const queryLowered = q.toLowerCase()

  const filteredData = data.payment.filter(
    user =>
      (user.paymentName.toLowerCase().includes(queryLowered) || user.status.toLowerCase().includes(queryLowered)) &&
      user.status === (status || user.status)
  )

  return [
    200,
    {
      allData: data.payment,
      payment: filteredData,
      params: config.params,
      total: filteredData.length
    }
  ]
})

// GET: particular user data
mock.onGet('/apps/user').reply(config => {
  const { id } = config.params
  const userData = data.payment.filter(user => user.id === parseInt(id, 10))
  if (userData.length) {
    return [200, userData[0]]
  } else {
    return [404, { message: 'Unable to find the requested user!' }]
  }
})

// DELETE: Deletes User
mock.onDelete('/apps/payment/delete').reply(config => {
  // Get user id from URL
  const userId = config.data
  const userIndex = data.payment.findIndex(t => t.id === userId)
  data.payment.splice(userIndex, 1)

  return [200]
})
