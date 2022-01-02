import faker from 'faker'
import { sample } from 'lodash'
// utils
// import { mockImgAvatar } from '../utils/mockImages'

// ----------------------------------------------------------------------
// _id, name, address, phoneNumber, activeStatus, city, country
const users = [...Array(40).keys()].map((x) => ({
   _id: faker.datatype.uuid(),
   // avatarUrl: mockImgAvatar(index + 1),
   name: faker.name.findName(),
   address: faker.address.streetAddress,
   phoneNumber: faker.phone.phoneNumber,
   activeStatus: sample(['active', 'inactive']),
   city: faker.address.cityName,
   state: faker.address.county,
   jin: x + 1,
}))

export default users
