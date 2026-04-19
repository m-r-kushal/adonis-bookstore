import factory from '@adonisjs/lucid/factories'
import Book from '#models/book'

export const BookFactory = factory
  .define(Book, async ({ faker }) => {
    return {
      title: faker.book.title(),
      author: faker.book.author(),
      isbn: faker.commerce.isbn(13),
      price: Number(faker.commerce.price({ min: 100, max: 200, dec: 2 })),
      stock: faker.number.int({ min: 0, max: 100 }),
    }
  })
  .build()
