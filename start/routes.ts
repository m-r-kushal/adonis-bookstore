/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router.get('/all-books', [controllers.Books, 'index']).as('books.index')
router.get('/books/create', [controllers.Books, 'create']).as('books.create')
router.post('/books', [controllers.Books, 'store']).as('books.store')
router.get('/books/:id/edit', [controllers.Books, 'edit']).as('books.edit')
router.put('/books/:id', [controllers.Books, 'update']).as('books.update')
router.get('/books/:id', [controllers.Books, 'show']).as('books.show')



router.on('/').render('pages/home').as('home')

router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.post('logout', [controllers.Session, 'destroy'])
  })
  .use(middleware.auth())









