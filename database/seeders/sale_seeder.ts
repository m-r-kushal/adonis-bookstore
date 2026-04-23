import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Customer from '#models/customer'
import { CustomerFactory } from '#database/factories/customer_factory'
import Sale from '#models/sale'
import { SaleFactory } from '#database/factories/sale_factory'

export default class extends BaseSeeder {
  async run() {
    const existingSale = await Sale.query().first()
    if (existingSale) {
      return
    }

    let customers = await Customer.all()

    if (customers.length === 0) {
      customers = await CustomerFactory.createMany(20)
    }

    for (let index = 0; index < 20; index++) {
      const customer = customers[index % customers.length]

      await SaleFactory.merge({ customerId: customer.id }).create()
    }
  }
}
