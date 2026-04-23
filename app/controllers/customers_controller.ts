import type { HttpContext } from '@adonisjs/core/http'
import Customer from '#models/customer'

export default class CustomersController {
  /**
   * Display a list of resource
   */
  async index({ view, request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = 15

    const customers = await Customer.query().preload('sales').paginate(page, perPage)

    return view.render('customers/index', { customers: customers, page: page })
  }

  async sales({ params, view, request }: HttpContext) {
    const customer = await Customer.findOrFail(params.id)
    const page = request.input('page', 1)
    const perPage = 15

    const sales = await customer
      .related('sales')
      .query()
      .preload('saleDetails', (saleDetailsQuery) => {
        saleDetailsQuery.preload('book')
      })
      .orderBy('id', 'desc')
      .paginate(page, perPage)

    return view.render('customers/sales', { customer, sales, page })
  }
}
