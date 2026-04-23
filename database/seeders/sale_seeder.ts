import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Customer from '#models/customer'
import Sale from '#models/sale'
import { SaleFactory } from '#database/factories/sale_factory'

export default class extends BaseSeeder {
  async run() {
    await Sale.truncate()

    let customers = await Customer.all()

    for (const customer of customers) {
      const saleCount = Math.floor(Math.random() * 5) + 1
      await SaleFactory.merge({ customerId: customer.id }).createMany(saleCount)
    }
  }
}
