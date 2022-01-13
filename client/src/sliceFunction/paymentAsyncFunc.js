import axios from 'axios'

// const mockApi = process.env.REACT_APP_MOCK_DATA
const apiUrl = process.env.REACT_APP_SERVER_URL || ''

export const getPaymentFunc = async ({ keyword = '', pageNumber }, config) => {
   const { data } = await axios.get(
      `${apiUrl}/api/v2/payments?keyword=${keyword}&pageNumber=${pageNumber}`,
      config
   )
   return data
}

export const getPaymentByIdFunc = async (id, config) => {
   const { data } = await axios.get(`${apiUrl}/api/v2/payments/${id}`, config)
   return data
}

export const addNewPaymentFunc = async (newData, config) => {
   const { data } = await axios.post(
      `${apiUrl}/api/v2/payments`,
      newData,
      config
   )
   return data
}

export const updatePaymentFunc = async (id, newData, config) => {
   const { data } = await axios.put(
      `${apiUrl}/api/v2/payments/${id}`,
      newData,
      config
   )
   return data
}
