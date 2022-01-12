import axios from 'axios'

const mockApi = process.env.REACT_APP_MOCK_DATA
const apiUrl = process.env.REACT_APP_SERVER_URL || ''
export const getAccountFunc = async (
   { keyword = '', pageNumber = '' },
   config
) => {
   if (mockApi) {
      console.log('get all account from mock data')
      return []
   }
   const { data } = await axios.get(
      `${apiUrl}/api/v2/accounts?keyword=${keyword}&pageNumber=${pageNumber}`,
      config
   )
   return data
}

export const getAccountByIdFunc = async (id, config) => {
   const { data } = await axios.get(`${apiUrl}/api/v2/accounts/${id}`, config)
   return data
}

export const addNewAccountFunc = async (newData, config) => {
   const { data } = await axios.post(
      `${apiUrl}/api/v2/accounts`,
      newData,
      config
   )
   return data
}

export const updateAccountFunc = async (id, newData, config) => {
   const { data } = await axios.put(
      `${apiUrl}/api/v2/accounts/${id}`,
      newData,
      config
   )
   return data
}
