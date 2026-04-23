import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Book from '#models/book'
import Sale from '#models/sale'
import SaleDetail from '#models/sale_detail'

export default class extends BaseSeeder {
  async run() {
    await SaleDetail.truncate()

    // Get all books and create a lookup map for unit prices
    const books = await Book.query().select('id', 'price')

    let sales = await Sale.all()

    for (const sale of sales) {
      const saleDetailsCount = Math.floor(Math.random() * 5) + 1

      for (let i = 0; i < saleDetailsCount; i++) {
        const randomBookId = Math.floor(Math.random() * books.length) + 1

        const bookId = books[randomBookId].id
        const unitPrice = books[randomBookId].price
        const quantity = Math.floor(Math.random() * 3) + 1
        const lineTotal = unitPrice * quantity

        await SaleDetail.create({
          saleId: sale.id,
          bookId: bookId,
          quantity: quantity,
          unitPrice: unitPrice,
          lineTotal: lineTotal,
        })
      }
    }
  }
}
