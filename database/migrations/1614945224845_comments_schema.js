'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentsSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.increments()
      table.integer('page_id').unsigned().references('id').inTable('page')
      table.integer('video_id').unsigned().references('id').inTable('video')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('text', 400).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('comments')
  }
}

module.exports = CommentsSchema
