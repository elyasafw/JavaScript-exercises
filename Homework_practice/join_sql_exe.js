import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: "127.0.0.1",
    port: 3305,
    user: "root",
    password: "root",
});
await connection.execute("CREATE DATABASE IF NOT EXISTS join_exe");
await connection.end();

async function connectDB() {
    try {
        const connection = await mysql.createPool({
            host: "127.0.0.1",
            port: 3305,
            user: "root",
            password: "root",
            database: "join_exe",
            connectionLimit: 10,
        });
        return connection;
    } catch (error) {
        console.error("Error at connected:", error.message);
    }
}

const pool = await connectDB();

async function createTables() {
    try {
        await pool.execute(`
            CREATE TABLE IF NOT EXISTS users (
                id INT PRIMARY KEY AUTO_INCREMENT,
                name TEXT NOT NULL,
                city_id INT
            )
        `);

        await pool.execute(`
            CREATE TABLE IF NOT EXISTS orders (
                id INT PRIMARY KEY AUTO_INCREMENT,
                user_id INT,
                product TEXT,
                amount INT,
                CONSTRAINT fk_users_id
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `);

        await pool.execute(`
            CREATE TABLE IF NOT EXISTS cities (
                id INT PRIMARY KEY AUTO_INCREMENT,
                city TEXT,
                country TEXT
            )
        `);
        console.log("All tables are ready!");
    } catch (error) {
        console.error("Error creating tables:", error.message);
    }
}

async function insertData() {
    try {
        await pool.execute(`
            INSERT IGNORE INTO users (id, name, city_id) VALUES 
                (1,'Alice',10),
                (2,'David',11),
                (3,'Sarah',10),
                (4,'Noa',12)
        `);

        await pool.execute(`
            INSERT IGNORE INTO orders (id, user_id, product, amount) VALUES 
                (1,1,'MacBook',2500),
                (2,1,'Phone',900),
                (3,3,'Tablet',600),
                (4,3,'Keyboard',150)
        `);

        await pool.execute(`
            INSERT IGNORE INTO cities (id, city, country) VALUES 
                (10,'Tel Aviv','IL'),
                (11,'Jerusalem','IL'),
                (12,'Haifa','IL')
        `);
        console.log("Data inserted successfully!");
    } catch (error) {
        console.error("Error inserting data:", error.message);
    }
}

await createTables();
await insertData();

// 1.
try {
    const [exe1] = await pool.execute(`
        SELECT u.name, o.product, o.amount
        FROM users u
        INNER JOIN orders o ON u.id = o.user_id
        WHERE o.amount > 0
    `);

    console.log("--- Result of Query exe 1 ---");
    console.log(exe1);
} catch (error) {
    console.error("Error executing query exe 1:", error.message);
}

// 2.
try {
    const [exe2] = await pool.execute(`
        SELECT u.name, MIN(o.product) AS product
        FROM users u
        LEFT JOIN orders o ON u.id = o.user_id
        GROUP BY u.name
        `);
    console.log("--- Result of Query exe 2 ---");
    console.log(exe2);
} catch (error) {
    console.log("Error executing query exe 2:", error.message);
}

// 3.
try {
    console.log("--- Result of Query exe 3 ---");
    const [exe3] = await pool.execute(`
        SELECT u.name FROM users u
        LEFT JOIN orders o ON u.id = o.user_id
        WHERE o.product IS NULL
        `);
    console.log(exe3);
} catch (error) {
    console.log("Error executing query exe 3:", error.message);
}

// 4.
try {
    console.log("--- Result of Query exe 4 ---");
    const [exe4] = await pool.execute(`
        SELECT u.name, o.product, o.amount
        FROM users u
        INNER JOIN orders o ON u.id = o.user_id
        WHERE o.amount > 500
        ORDER BY o.amount DESC
        `);
    console.log(exe4);
} catch (error) {
    console.log("Error executing query exe 4:", error.message);
}

// 5.
try {
    console.log("--- Result of Query exe 5 ---");
    const [exe5] = await pool.execute(`
        SELECT u.name, o.product, c.city
        FROM users u
        INNER JOIN orders o ON u.id = o.user_id
        INNER JOIN cities c ON u.city_id = c.id
        `);
    console.log(exe5);
} catch (error) {
    console.log("Error executing query exe 4:", error.message);
}

await pool.end();
