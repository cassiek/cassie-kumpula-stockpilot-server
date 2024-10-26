/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("warehouses").del()
  await knex("warehouses").insert([
    {
      id: 1, 
      address: "2719 Red Bud Lane",
      city: "Tampa",
      country: "USA",
      contact_name: "Parmin Aujla",
      contact_position: "Warehouse Manager",
      contact_phone: "+1 (863) 215-2629",
      contact_email: "paujla@stockpilot.com"
    },
    {
      id: 2, 
      address: "3681 Murphy Court",
      city: "Riverside",
      country: "USA",
      contact_name: "Greame Lyon",
      contact_position: "Warehouse Manager",
      contact_phone: "+1 (951) 916-4110",
      contact_email: "glyon@stockpilot.com"
    },
    {
      id: 3, 
      address: "2465 Erie Road #112",
      city: "Mississauga",
      country: "Canada",
      contact_name: "Brad MacDonald",
      contact_position: "Warehouse Manager",
      contact_phone: "+1 (646) 123-1234",
      contact_email: "bmacdonald@stockpilot.com"
    },
    {
      id: 4, 
      address: "836 Lake Road",
      city: "Prospect Plains",
      country: "USA",
      contact_name: "Gary Wong",
      contact_position: "Warehouse Manager",
      contact_phone: "+1 (609) 395-3059",
      contact_email: "gwong@stockpilot.com"
    },
    {
      id: 5, 
      address: "520 Pinellas Way",
      city: "Santa Monica",
      country: "USA",
      contact_name: "Jen Davis",
      contact_position: "Warehouse Manager",
      contact_phone: "+1 (907) 677-9284",
      contact_email: "jdavis@stockpilot.com"
    },
    {
      id: 6, 
      address: "2980 Emerson Road",
      city: "New Orleans",
      country: "USA",
      contact_name: "Sharon Ng",
      contact_position: "Warehouse Manager",
      contact_phone: "+1 (318) 747-6168",
      contact_email: "sng@stockpilot.com"
    },
    {
      id: 7, 
      address: "4515 Elliot Avenue",
      city: "Des Moines",
      country: "USA",
      contact_name: "Daniel Bachu",
      contact_position: "Warehouse Manager",
      contact_phone: "+1 (206) 592-9201",
      contact_email: "dbachu@stockpilot.com"
    },
    {
      id: 8, 
      address: "100 Saint-Paul Street West",
      city: "Montréal",
      country: "Canada",
      contact_name: "Cade Borer",
      contact_position: "Warehouse Manager",
      contact_phone: "+1 (239) 498-0794",
      contact_email: "cborer@stockpilot.com"
    },
    {
      id: 9, 
      address: "1112 Broad Street",
      city: "Brooklyn",
      country: "USA",
      contact_name: "Courtney Kirlin",
      contact_position: "Warehouse Manager",
      contact_phone: "+1 (718) 484-3322",
      contact_email: "ckirlin@stockpilot.com"
    },
    {
      id: 10, 
      address: "1824 Davidson Street West",
      city: "Vancouver",
      country: "Canada",
      contact_name: "Hattie Hodkiewicz",
      contact_position: "Warehouse Manager",
      contact_phone: "+1 (773) 862-8686",
      contact_email: "hhodkiewicz@stockpilot.com"
    }
  ]);
};
