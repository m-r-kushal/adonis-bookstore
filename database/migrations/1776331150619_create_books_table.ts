import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.string('author').notNullable()
      table.string('isbn').notNullable().unique()
      table.decimal('price', 10, 2).notNullable()
      table.integer('stock').notNullable().defaultTo(0)

      table.timestamps(true,true)

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
