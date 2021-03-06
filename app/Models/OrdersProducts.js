'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrdersProduct extends Model {
    product () {
        return this.hasMany('App/Models/Product')
      }
    order () {
        return this.hasMany('App/Models/Order')
    }
}

module.exports = OrdersProduct
