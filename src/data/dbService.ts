import Database from "@tauri-apps/plugin-sql";

let db : Database;

/**
 * Initialize database
 */
export async function initDB() {
  if (!db) {
    db = await Database.load("sqlite:system.db");

    // Create tables if not exist
    await db.execute(`
      create table if not exists lenders(
        lender_id text primary key,
        business_name text,
        phone_number text,
        email text,
        interest_rate decimal(12,2)
      );
      create table if not exists borrowers(
        borrower_id text primary key,
        full_names text,
        email text,
        phone_number text,
        residence text
      ):
      create table if not exists accounts(
        account_id text primary key,
        lender_id text,
        username text unique,
        password_hash text
      );
    `);
  }
  return db;
}

/**
 * Insert a user
 */
export async function addUser(name : string, email : string) {
  const database = await initDB();
  await database.execute(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email]
  );
}

/**
 * Get all users
 */
export async function getUsers() {
  const database = await initDB();
  return await database.select("SELECT * FROM users");
}

/**
 * Find user by email
 */
export async function findUserByEmail(email : string) {
  const database = await initDB();
  return await database.select("SELECT * FROM users WHERE email = $1", [email]);
}

/**
 * Delete user by id
 */
export async function deleteUser(id : string) {
  const database = await initDB();
  await database.execute("DELETE FROM users WHERE id = $1", [id]);
}
