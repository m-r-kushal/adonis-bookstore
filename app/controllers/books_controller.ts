import type { HttpContext } from '@adonisjs/core/http'

export default class BooksController {
  public async index({ view }: HttpContext) {

    return 'Hello World!';

  }
}
