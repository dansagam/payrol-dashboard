import axios from 'axios'

// const mockApi = process.env.REACT_APP_MOCK_DATA
const apiUrl = process.env.REACT_APP_SERVER_URL || ''

export const getPayrollFunc = async (
   { keyword = '', pageNumber = '' },
   config
) => {
   const { data } = await axios.get(
      `${apiUrl}/api/v2/payrolls?keyword=${keyword}&pageNumber=${pageNumber}`,
      config
   )
   return data
}

export const getPayrollByIdFunc = async (id, config) => {
   const { data } = await axios.get(`${apiUrl}/api/v2/payrolls/${id}`, config)
   return data
}

export const addNewPayrollFunc = async (newData, config) => {
   const { data } = await axios.post(
      `${apiUrl}/api/v2/payrolls`,
      newData,
      config
   )
   return data
}

export const updatePayrollFunc = async (id, newData, config) => {
   const { data } = await axios.put(
      `${apiUrl}/api/v2/payrolls/${id}`,
      newData,
      config
   )
   return data
}
