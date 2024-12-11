import sql from "mssql";



const dbSettings = {
    server: 'localhost',
    port: 1433, // Or your specific port
    user: 'userConcesionario',
    password: 'NewPassword123!',
    database: 'Concesionario',
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
};

/*async function testConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        console.log('Connected successfully to the database!');
        const result = await pool.request().query('SELECT 1 AS result');
        console.log('Query Result:', result.recordset);
        pool.close(); // Cierra la conexión después de usarla
    } catch (err) {
        console.error('Connection Error:', err.message);
    }
}

testConnection();*/
/*
async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        console.log('Connected to the database');
    } catch (err) {
        console.error('Database connection error:', err.message);
    }
}*/
async function getConnection(){
    const pool = await sql.connect(dbSettings)
    const result = await pool.request().query('SELECT 1')
    console.log(result)
}


getConnection();