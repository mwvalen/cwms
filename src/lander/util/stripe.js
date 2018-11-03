import axios from 'axios'

export const retrieveCustomer = customerId => {
  return axios.post('/api/retrieve-customer', {customerId})
}

export const createCustomer = token => {
  return axios.post('/api/create-customer', {token})
}

export const chargeCustomer = (customer, charge, description) => {
  return axios.post('/api/charge-customer', {
    customerId: customer.id,
    charge,
    description
  })
}

export const extractCardInfo = (customer, cardIdx) => {
  const card = customer.sources.data[cardIdx || 0]
  const {
    brand,
    exp_month: expiryMonth,
    exp_year: expiryYear,
    last4
  } = card

  return {
    brand,
    expiryMonth,
    expiryYear,
    last4
  }
}
