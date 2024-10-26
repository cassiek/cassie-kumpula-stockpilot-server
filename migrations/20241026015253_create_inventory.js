/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema
    .createTable("inventory-i", (table) => {
      table.increments("id").primary();
      table
          .integer("warehouse_id")
          .unsigned()
          .references("warehouses.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      table.string("name").notNullable();
      table.string("variant").notNullable();
      table.boolean("status").notNullable();
      table.integer("quantity").unsigned();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("inventory-ii", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.json("variants").notNullable();
      table.string("description").notNullable();
      table.string("category").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
          .timestamp("updated_at")
          .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
};
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
export function down(knex) {
    return knex.schema.dropTable("inventory-i").dropTable("inventory-ii");
};
