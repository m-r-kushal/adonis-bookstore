import factory from '@adonisjs/lucid/factories'
import Sale from '#models/sale'
import { DateTime } from 'luxon'

export const SaleFactory = factory
  .define(Sale, async ({ faker }) => {
    const fakerSaleDate = faker.date.recent({ days: 30 })

    return {
      customerId: faker.number.int({ min: 1, max: 20 }),
      saleDate: DateTime.fromJSDate(fakerSaleDate),
      totalAmount: 0,
    }
  })
  .build()
