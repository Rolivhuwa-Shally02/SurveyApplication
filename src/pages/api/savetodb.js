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

export default function handler(req, res) {
  if (req.method === "POST") {
    const insertQuery = `INSERT INTO entries (fullname, email, dateofbirth,contactnumber,favoritefood,watchmovies,listenradio,eatout,watchtv) VALUES ($1, $2, $3, $4, $5,$6, $7,$8,$9)`;
    const values = [
      req.body.fullname,
      req.body.email,
      req.body.dateofbirth,
      req.body.contactnumber,
      req.body.favoritefood,
      req.body.watchmovies,
      req.body.listenradio,
      req.body.eatout,
      req.body.watchtv,
    ];
    pool.query(insertQuery, values, (error, result) => {
      if (error) {
        console.error("Error executing query", error);
        return;
      }
      console.log("Data inserted successfully");
    });
    console.log(req.body);
    res.status(200).json({ name: "Data inserted" });
  } else {
    // Handle any other HTTP method
  }
  //pool.end();
}
