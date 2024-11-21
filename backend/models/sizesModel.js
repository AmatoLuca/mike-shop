import mongoose from 'mongoose';

const sizesSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//export const SizesModel = mongoose.model('Size', sizesSchema);

export default sizesSchema;
