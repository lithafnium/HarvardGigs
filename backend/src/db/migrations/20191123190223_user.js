const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('firstName').notNullable

  table
    .string('lastName').notNullable

  table
    .string('email')
    .unique()
    .notNullable()

  table
    .string('phoneNumber')
    .unique()
  table.timestamp('createdAt').defaultTo(knex.fn.now())

  table.string('password').notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
