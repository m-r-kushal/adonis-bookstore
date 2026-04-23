import { SaleDetailSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Book from '#models/book'

export default class SaleDetail extends SaleDetailSchema {
  @belongsTo(() => Book)
  declare book: BelongsTo<typeof Book>
}
