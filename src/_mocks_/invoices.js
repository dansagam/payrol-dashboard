import faker from 'faker'
import { sample } from 'lodash'

const customerNames = [
   'Peonet Ltd',
   'Dangote Ltd',
   'Systime Eng Ltd',
   'Joyplace',
   'the Payer',
   'Bamidele Group',
   'baggio group',
   'Dunlop Tyres',
   'Michelins',
   'Muoka Foams',
   'Adimerun group',
   'Pep',
   'Domino Pizza',
   'KFC',
   'Mr Biggs',
   'Mr Bug',
   'Disney',
   'yo concept',
   'Luphem Technologies',
   'Kenny Tech',
   'ApTech',
   'Gbayi LTD',
   'Payless',
   'Rudimental Group',
   'IBTS',
   'HTS',
   'MTN',
   'Airtel',
   'Sura D Tailor',
   'Agege Zazoo zeh',
]
const amount = 50000
const invoices = [...Array(30)].map((_, index) => ({
   _id: faker.datatype.uuid,
   customerName: customerNames[index],
   invoiceRef: `ABC${0 + index}`,
   invoiceAmount: amount + 500 * index,
   dueStatus: sample(['overdue', 'due Today', 'due in some days']),
}))

export default invoices
