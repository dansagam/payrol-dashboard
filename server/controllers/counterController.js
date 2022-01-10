import Counter from '../models/counterModel.js'

const nextSequenceValue = async (sequenceName) => {
   const sequenceDoc = await Counter.findByIdAndUpdate(
      sequenceName,
      {
         $inc: { sequence_value: 1 },
      },
      { new: true }
   )
   if (sequenceDoc) {
      return sequenceDoc.sequence_value
   } else {
      throw new Error('counter cant be updated')
   }
}
const prevSequenceValue = async (sequenceName) => {
   const sequenceDoc = await Counter.findByIdAndUpdate(
      sequenceName,
      {
         $inc: { sequence_value: -1 },
      },
      { new: true }
   )
   if (sequenceDoc) {
      return sequenceDoc.sequence_value
   } else {
      throw new Error('counter cant be updated')
   }
}
export { prevSequenceValue }
export default nextSequenceValue
