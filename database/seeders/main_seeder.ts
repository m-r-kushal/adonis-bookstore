import { BaseSeeder } from '@adonisjs/lucid/seeders'

import BookSeeder from '#database/seeders/book_seeder'
import CustomerSeeder from '#database/seeders/customer_seeder'
import SaleSeeder from '#database/seeders/sale_seeder'
import SaleDetailSeeder from '#database/seeders/sale_detail_seeder'

export default class extends BaseSeeder {
  async run() {
    await new BookSeeder(this.client).run()
    await new CustomerSeeder(this.client).run()
    await new SaleSeeder(this.client).run()
    await new SaleDetailSeeder(this.client).run()
  }
}
