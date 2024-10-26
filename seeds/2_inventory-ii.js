/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("inventory-ii").del()
  await knex("inventory-ii").insert([
    {
      id: 1, 
      name: "Long Tie Belt Coat",
      variants: '["charcoal", "black", "silver", "grey plaid"]',
      description: "Long coat in woven fabric with tie belt and vent at back. Lined.",
      category: "Outerwear"
    },
    {
      id: 2, 
      name: "Crochet Knit Sweater",
      variants: '["gold", "burgundy", "plum", "indigo"]',
      description: "Soft, crochet knit sweater with wool. Round neckline.",
      category: "Sweaters"
    },
    {
      id: 3, 
      name: "Long Puffer Jacket",
      variants: '["black", "graphite", "white", "pink", "plum"]',
      description: "Long jacket with padding. Concealed, insulating cuffs.",
      category: "Outerwear"
    },
    {
      id: 4, 
      name: "Mock Turtleneck Dress",
      variants: '["black", "sage", "olive", "charcoal"]',
      description: "Knee length, fitted knit dress.",
      category: "Dresses"
    },
    {
      id: 5, 
      name: "Sweatshirt",
      variants: '["tan", "navy", "warm white", "sage", "beige"]',
      description: "Roomy sweatshirt with soft inside.",
      category: "Sweatshirts"
    },
    {
      id: 6, 
      name: "Straight Leg Pants",
      variants: '["black", "graphite", "khaki", "grey plaid"]',
      description: "Long leg pants in woven fabric. Regular waist. Concealed zip fly.",
      category: "Pants"
    },
    {
      id: 7, 
      name: "High Waisted Jeans",
      variants: '["dark", "medium", "light"]',
      description: "Slim fit, five pocket, high-waisted jeans in cotton denim. Typically falls to top of foot.",
      category: "Jeans"
    },
    {
      id: 8, 
      name: "Wide Leg Pants",
      variants: '["charcoal", "black", "white"]',
      description: "Loose fit, wide leg pants with pleats.",
      category: "Pants"
    },
    {
      id: 9, 
      name: "Fine Knit Sweater",
      variants: '["brown", "burgundy", "light grey"]',
      description: "Soft fine knit sweater. Ribbing at neckline, cuffs, and hem.",
      category: "Sweaters"
    },
    {
      id: 10, 
      name: "Lightweight Cotton Shirt",
      variants: '["white", "warm white", "silver", "light grey"]',
      description: "Shirt in woven fabric.",
      category: "Shirts"
    },
    {
      id: 11, 
      name: "Chiffon Blouse",
      variants: '["white", "lilac", "light gold"]',
      description: "Long-sleeved, loose-fitting blouse in solid chiffon.",
      category: "Blouses"
    },
    {
      id: 12, 
      name: "Oxford Shirt",
      variants: '["white", "light blue", "light grey"]',
      description: "Washed oxford cotton shirt.",
      category: "Shirts"
    },
    {
      id: 13, 
      name: "Feathersoft Blouse",
      variants: '["black", "warm white", "grey"]',
      description: "Loose fitting blouse in soft twill. Ruffled collar.",
      category: "Blouses"
    },
    {
      id: 14, 
      name: "Long Sleeve Top",
      variants: '["white", "warm white", "sage", "light gold"]',
      description: "Long, fitted top in soft jersey. No ribbing.",
      category: "Tops"
    },
    {
      id: 15, 
      name: "Crew Neck Long Top",
      variants: '["charcoal", "navy", "plum", "light blue"]',
      description: "Long, fitted top in soft jersey. Long sleeves and straight-cut hem.",
      category: "Tops"
    },
    {
      id: 16, 
      name: "High Waisted Soft Jeans",
      variants: '["black", "graphite", "dark", "light"]',
      description: "Skinny fit, gently stretching high-waisted jeans. Extra soft cotton denim.",
      category: "Jeans"
    },
    {
      id: 17, 
      name: "Slacks",
      variants: '["charcoal", "black", "khaki"]',
      description: "Slacks with regular waist, concealed elasticized waistband, and zip with concealed hook and eye fastener.",
      category: "Pants"
    },
    {
      id: 18, 
      name: "Cable Knit Sweater",
      variants: '["charcoal", "warm white", "white", "light gold", "light blue"]',
      description: "Slightly loose fitting, softly cable-knitted sweater. Round neckline and long sleeves.",
      category: "Sweaters"
    },
    {
      id: 19, 
      name: "Wide Leg Joggers",
      variants: '["black", "graphite", "navy", "tan"]',
      description: "Loose-fit, wide leg sweatpants. Elasticized waist.",
      category: "Pants"
    },
    {
      id: 20, 
      name: "Loafers",
      variants: '["charcoal", "black", "dark brown"]',
      description: "Rounded-toe loafers with a tab on front. Satin Lining.",
      category: "Shoes"
    }
  ]);
};

