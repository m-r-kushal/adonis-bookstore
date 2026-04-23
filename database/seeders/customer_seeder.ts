import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { CustomerFactory } from '#database/factories/customer_factory'
import Customer from '#models/customer'

export default class extends BaseSeeder {
  async run() {
    await Customer.truncate()

    await CustomerFactory.createMany(20)
  }
}
