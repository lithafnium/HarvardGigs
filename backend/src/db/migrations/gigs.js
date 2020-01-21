const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'gigs', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('ownerId')
    .notNullable()
    .references('userId')

  table
    .string('title').notNullable

  table
    .string('photo').notNullable

  table
    .string('price').notNullable

  table.timestamp('createdAt').defaultTo(knex.fn.now())

})
exports.down = async knex => knex.schema.dropTableIfExists('gigs')