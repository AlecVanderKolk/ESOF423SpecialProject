'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PageSchema extends Schema {
  up () {
    this.create('pages', (table) => {
      table.increments()
      table.string('name', 50).notNullable().unique()
      table.boolean('page_visibility').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('pages')
  }
}

module.exports = PageSchema
