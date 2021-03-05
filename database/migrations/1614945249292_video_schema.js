'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VideoSchema extends Schema {
  up () {
    this.create('videos', (table) => {
      table.increments()
      table.integer('page_id').unsigned().references('id').inTable('page')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('description', 400)
      table.timestamps()
    })
  }

  down () {
    this.drop('videos')
  }
}

module.exports = VideoSchema
