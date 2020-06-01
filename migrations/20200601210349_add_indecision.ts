import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  if(!await knex.schema.hasTable('indecisions')){
    return await knex.schema.createTable('indecisions', function(table){
      table.increments();
      table.string('title');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
  }
}


export async function down(knex: Knex): Promise<any> {
}

