import Product, { ProductDocument } from '../models/Product'

function create(product: ProductDocument): Promise<ProductDocument> {
  return product.save()
}

function findAll(): Promise<ProductDocument[]> {
  return Product.find().sort({ name: 1 }).exec() // Return a Promise
}

// find product by ID
async function findById(productId: string): Promise<ProductDocument> {
  const product = await Product.findById(productId).exec()
  if (!product) {
    throw new Error(`Product ${productId} not found`)
  }
  return product
}

// find product by name
async function findByName(productName: string): Promise<ProductDocument[]> {
  const product = await Product.find({ name: productName }).exec()
  if (!product) {
    throw new Error(`Product ${productName} not found`)
  }
  return product
}

// find product by Category
async function findByCategory(
  productCategory: string
): Promise<ProductDocument[]> {
  const product = await Product.find({ category: productCategory }).exec()
  if (!product) {
    throw new Error(`Product in ${productCategory} not found`)
  }
  return product
}
// find product by Variants
async function findByVariants(
  productVariants: string
): Promise<ProductDocument[]> {
  const product = await Product.find({ variants: productVariants }).exec()
  if (!product) {
    throw new Error(`Product with ${productVariants} not found`)
  }
  return product
}

function deleteProduct(productId: string): Promise<ProductDocument | null> {
  return Product.findByIdAndDelete(productId).exec()
}

async function update(
  productId: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument> {
  const product = await Product.findById(productId).exec()
  if (!product) {
    throw new Error(`Product ${productId} not found`)
  }
  if (update.name) {
    product.name = update.name
  }
  if (update.description) {
    product.description = update.description
  }
  if (update.category) {
    product.category = update.category
  }
  if (update.variants) {
    product.variants = update.variants
  }
  if (update.sizes) {
    product.sizes = update.sizes
  }
  return product.save()
}
export default {
  create,
  findById,
  findAll,
  findByName,
  findByCategory,
  findByVariants,
  deleteProduct,
  update,
}
