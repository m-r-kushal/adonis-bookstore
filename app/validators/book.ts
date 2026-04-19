import vine from '@vinejs/vine'

// const title = () => vine.string().trim().minLength(1).maxLength(255)
// const author = () => vine.string().trim().minLength(1).maxLength(255)
// const isbn = () => vine.string().trim().minLength(10).maxLength(20)
// const price = () => vine.string().trim().regex(/^\d+(\.\d{1,2})?$/)
// const stock = () => vine.string().trim().regex(/^\d+$/)

export const bookValidator = vine.create({
  title: vine.string().trim().minLength(1).maxLength(255),
  author: vine.string().trim().minLength(1).maxLength(255),
  isbn: vine.string().trim().fixedLength(13),
  price: vine.number().positive().decimal([0, 2]),
  stock: vine.number().nonNegative().withoutDecimals(),
})
