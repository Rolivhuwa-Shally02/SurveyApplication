// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Pool } = require("pg");
const fs = require("fs"); // Node.js built-in module for file operations
// Read SSL certificate files
// const sslCert = fs.readFileSync("./cert.pem"); // Path to your SSL certificate
// const sslKey = fs.readFileSync("./key.pem"); // Path to your SSL private key
// const caKey = fs.readFileSync("./csr.pem"); // Path to your SSL private key

const pool = new Pool({
  user: "postgres",
  host: "database-1.cjgiugakcaci.us-east-1.rds.amazonaws.com",
  database: "survey",
  password: "ICTPass4349",

  port: 5432, // default PostgreSQL port
});

export default async function handler(req, res) {
  let db_result;
  if (req.method === "GET") {
    const youngestQuery = `SELECT MAX("dateofbirth") AS youngest_date FROM public.entries;`;

    await pool.query(youngestQuery, (error, result) => {
      if (error) {
        console.error("Error executing query", error);
        return;
      }
      console.log("Data queried successfully");
      console.log();
      res.status(200).json(result);
    });
  } else {
    // Handle any other HTTP method
  }
  //   pool.end();
}
