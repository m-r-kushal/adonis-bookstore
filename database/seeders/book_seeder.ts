import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { BookFactory } from '#database/factories/book_factory'
import Book from '#models/book'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Book.truncate() // Clear existing data

    await BookFactory.createMany(100)
  }
}
