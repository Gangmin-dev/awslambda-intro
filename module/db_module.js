const mysql = require("mysql");

exports.getCommentByDB = () => {
  return new Promise((resolve, reject) => {
    const mysql_connection = mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWD,
      database: process.env.DB_NAME,
    });

    mysql_connection.connect();
    mysql_connection.query(
      `SELECT * FROM comment ORDER by id desc limit 5`,
      (err, result, field) => {
        if (result) resolve(result);
        if (err) console.log("db-error:", err);
      }
    );
    mysql_connection.end();
  });
};
