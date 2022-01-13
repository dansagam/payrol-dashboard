import axios from 'axios'

const apiUrl = process.env.REACT_APP_SERVER_URL || ''
export const getEmployeeFunc = async (
   { keyword = '', pageNumber = '' },
   config
) => {
   if (process.env.REACT_APP_MOCK_DATA) {
      console.log('using the mock data from the employee store')
      return []
   }
   const response = await axios.get(
      `${apiUrl}/api/v2/employees?keyword=${keyword}&pageNumber=${pageNumber}`,
      config
   )
   return response.data
}
export const getEmployeeByIdFunc = async (id, config) => {
   if (process.env.REACT_APP_MOCK_DATA) {
      console.log('using the mock data to get the employee by Id')
      return {}
   }
   const { data } = await axios.get(`${apiUrl}/api/v2/employees/${id}`, config)
   return data
}

export const addNewEmployeeFunc = async (newData, config) => {
   if (process.env.REACT_APP_MOCK_DATA) {
      console.log('add the new data to the mockdata store')
      return [...newData]
   }
   const { data } = await axios.post(
      `${apiUrl}/api/v2/employees`,
      newData,
      config
   )
   return data
}
export const updatePersonalEmployeeFunc = async (id, newData, config) => {
   const { data } = await axios.put(
      `${apiUrl}/api/v2/employees/${id}/personal`,
      newData,
      config
   )
   return data
}

export const updateFinancialEmployeeFunc = async (id, newData, config) => {
   const { data } = await axios.put(
      `${apiUrl}/api/v2/employees/${id}/finance`,
      newData,
      config
   )
   return data
}

export const deleteEmployeeFunc = async (id, config) => {
   const response = await axios.delete(
      `${apiUrl}/api/v2/employees/${id}`,
      config
   )
   return response.data
}
