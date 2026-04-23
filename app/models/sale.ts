import { SaleSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import Customer from '#models/customer'
import SaleDetail from '#models/sale_detail'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

export default class Sale extends SaleSchema {
  @belongsTo(() => Customer)
  declare customer: BelongsTo<typeof Customer>

  @hasMany(() => SaleDetail)
  declare saleDetails: HasMany<typeof SaleDetail>
}
