import { CustomerSchema } from '#database/schema'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Sale from '#models/sale'
import { hasMany } from '@adonisjs/lucid/orm'

export default class Customer extends CustomerSchema {
  @hasMany(() => Sale)
  declare sales: HasMany<typeof Sale>
}
