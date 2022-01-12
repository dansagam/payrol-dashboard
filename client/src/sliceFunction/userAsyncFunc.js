import axios from 'axios'

const mockApi = process.env.REACT_APP_MOCK_DATA
const apiUrl = process.env.REACT_APP_SERVER_URL || ''
export const getUserFunc = async (
   { keyword = '', pageNumber = '' },
   config
) => {
   if (mockApi) {
      console.log('get All from the mock data')
      return []
   }
   const { data } = await axios.get(
      `${apiUrl}/api/v2/users?keyword=${keyword}&pageNumber=${pageNumber}`,
      config
   )
   return data
}

export const getUserByIdFunc = async (id, config) => {
   if (mockApi) {
      console.log('get All from the mock data')
      return {}
   }
   const { data } = await axios.get(`${apiUrl}/api/v2/users/${id}`, config)
   return data
}

export const getUserProfileFunc = async (id, config) => {
   if (mockApi) {
      console.log('getting the profile of the mock data')
      return {}
   }
   const { data } = await axios.get(
      `${apiUrl}/api/v2/users/${id}/profile`,
      config
   )
   return data
}
export const getUserResetFunc = async (token, config) => {
   const { data } = await axios.get(
      `${apiUrl}/api/v2/users/reset/${token}`,
      config
   )
   return data
}

export const loginFunc = async (newData, config) => {
   if (mockApi) {
      console.log('login using the mock data')
      return {}
   }
   const { data } = await axios.post(
      `${apiUrl}/api/v2/users/login`,
      newData,
      config
   )
   return data
}
export const registerFunc = async (newData, config) => {
   if (mockApi) {
      console.log('register using the mock data')
      return {}
   }
   const { data } = await axios.post(`${apiUrl}/api/v2/users`, newData, config)
   return data
}
export const userRecoveryFunc = async (newData, config) => {
   const { data } = await axios.post(
      `${apiUrl}/api/v2/users/recover`,
      newData,
      config
   )
   return data
}
export const userResetFunc = async (token, newData, config) => {
   const { data } = await axios.post(
      `${apiUrl}/api/v2/users/reset/${token}`,
      newData,
      config
   )
   return data
}

export const userProfileUpdateFunc = async (id, newData, config) => {
   const { data } = await axios.put(
      `${apiUrl}/api/v2/users/${id}/profile`,
      newData,
      config
   )
   return data
}

export const userUpdateFunc = async (id, newData, config) => {
   const { data } = await axios.put(
      `${apiUrl}/api/v2/users/${id}`,
      newData,
      config
   )
   return data
}

export const deleteUserFunc = async (id, config) => {
   const { data } = await axios.delete(`${apiUrl}/api/v2/users/${id}`, config)
   return data
}

export const deleteUserSelfFunc = async (id, config) => {
   const { data } = await axios.delete(`${apiUrl}/api/v2/users/${id}`, config)
   return data
}
