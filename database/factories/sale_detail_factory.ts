import factory from '@adonisjs/lucid/factories'
import SaleDetail from '#models/sale_detail'

export const SaleDetailFactory = factory
  .define(SaleDetail, async ({ faker }) => {
    const quantity = faker.number.int({ min: 1, max: 5 })
    const unitPrice = Number(faker.commerce.price({ min: 100, max: 200, dec: 2 }))

    return {
      saleId: faker.number.int({ min: 1, max: 20 }),
      bookId: faker.number.int({ min: 1, max: 50 }),
      quantity:faker.number.int({ min: 1, max: 5 }),
      unitPrice: Number(faker.commerce.price({ min: 100, max: 200, dec: 2 })),
      lineTotal: Number((quantity * unitPrice).toFixed(2)),
    }
  })
  .build()
