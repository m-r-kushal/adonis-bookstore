import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Book from '#models/book'
import Customer from '#models/customer'
import Sale from '#models/sale'
import SaleDetail from '#models/sale_detail'
import { BookFactory } from '#database/factories/book_factory'
import { CustomerFactory } from '#database/factories/customer_factory'
import { SaleFactory } from '#database/factories/sale_factory'

export default class extends BaseSeeder {
  async run() {
    await SaleDetail.truncate()

    let books = await Book.all()
    if (books.length === 0) {
      books = await BookFactory.createMany(50)
    }
    const bookPrices = new Map(books.map((book) => [book.id, Number(book.price)]))

    let customers = await Customer.all()
    if (customers.length === 0) {
      customers = await CustomerFactory.createMany(20)
    }

    let sales = await Sale.all()
    if (sales.length === 0) {
      for (let index = 0; index < 20; index++) {
        const customer = customers[index % customers.length]
        await SaleFactory.merge({ customerId: customer.id, totalAmount: 0 }).create()
      }
      sales = await Sale.all()
    }

    for (const [index, sale] of sales.entries()) {
      const detailCount = (index % 3) + 1
      let totalAmount = 0

      for (let detailIndex = 0; detailIndex < detailCount; detailIndex++) {
        const book = books[(index + detailIndex) % books.length]
        const quantity = (detailIndex % 5) + 1
        const unitPrice = bookPrices.get(book.id) ?? 0
        const lineTotal = Number((quantity * unitPrice).toFixed(2))

        await SaleDetail.create({
          saleId: sale.id,
          bookId: book.id,
          quantity,
          unitPrice,
          lineTotal,
        })

        totalAmount += lineTotal
      }

      sale.totalAmount = Number(totalAmount.toFixed(2))
      await sale.save()
    }
  }
}
