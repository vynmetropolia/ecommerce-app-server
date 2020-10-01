import mongoose, { Document } from 'mongoose'

// export type VariantObject = {
//   [key: string]: string;
// }
export type ProductDocument = Document & {
  name: string;
  description: string;
  category: string;
  variants: string[];
  sizes: string[] | number[];
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  variants: {
    // type: mongoose.Schema.Types.Mixed,
    type: [String],
  },
  sizes: {
    type: [String] || [Number],
  },
})

export default mongoose.model<ProductDocument>('Product', productSchema)
