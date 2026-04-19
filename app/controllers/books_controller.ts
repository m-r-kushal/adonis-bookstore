import type { HttpContext } from '@adonisjs/core/http'
import Book from '#models/book'
import { bookValidator } from '#validators/book'

export default class BooksController {
  /**
   * Display a list of resource
   */
  async index({ view, request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = 15
    const books = await Book.query().paginate(page, perPage)
    return view.render('books/index', { books: books, page: page })
  }



  async create({ view }: HttpContext) {
    return view.render('books/create')
  }


  async store({ request, response, session }: HttpContext) {
    const data = await request.validateUsing(bookValidator)

    const book = await Book.create({ ...data })

    session.flash('success', 'Book created successfully.')
    return response.redirect().toRoute('books.show', { id: book.id })
  }



  async show({ params, view }: HttpContext) {
    const book = await Book.findOrFail(params.id)
    return view.render('books/show', { book })
  }


  async edit({ params, view }: HttpContext) {
    const book = await Book.findOrFail(params.id)
    return view.render('books/edit', { book })
  }


  async update({ params, request, response, session }: HttpContext) {
    const book = await Book.findOrFail(params.id)
    const data = await request.validateUsing(bookValidator)

    book.merge({ ...data })
    await book.save()

    session.flash('success', 'Book updated successfully.')
    return response.redirect().toRoute('books.show', { id: book.id })
  }

  /**
   * Delete record
   */
  async destroy({ }: HttpContext) { }
}
