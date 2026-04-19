import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'books.index': { paramsTuple?: []; params?: {} }
    'books.create': { paramsTuple?: []; params?: {} }
    'books.store': { paramsTuple?: []; params?: {} }
    'books.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'books.index': { paramsTuple?: []; params?: {} }
    'books.create': { paramsTuple?: []; params?: {} }
    'books.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'books.index': { paramsTuple?: []; params?: {} }
    'books.create': { paramsTuple?: []; params?: {} }
    'books.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'books.store': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'books.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}