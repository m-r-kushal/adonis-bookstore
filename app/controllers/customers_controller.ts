import type { HttpContext } from '@adonisjs/core/http'
import Customer from '#models/customer'

export default class CustomersController {
  /**
   * Display a list of resource
   */
  async index({ view, request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = 15

    const customers = await Customer.query().paginate(page, perPage)

    return view.render('customers/index', { customers: customers, page: page })
  }
}
