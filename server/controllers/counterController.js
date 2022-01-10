import Counter from '../models/counterModel.js'

const nextSequenceValue = async (sequenceName) => {
   const sequenceDoc = await Counter.findByIdAndUpdate(
      sequenceName,
      {
         $inc: { sequence_value: 1 },
      },
      { new: true }
   )
   return sequenceDoc.sequence_value
}

export default nextSequenceValue
