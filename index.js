function mysql_handling1() {

  var mysql = require("mysql");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "diya_dev"
  });

  con.connect(function (err) {
    if (err) throw err;
    // if connection is successful
    con.query(
      "Select * from users_alert_rules",
      function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        // console.log(fields);
      }
    );
  });
  console.log("****************");

}
// for async/await
async function mysql_handling2() {
  try {


    const mysql = require("mysql2/promise");
    // Step1: create DB pool
    const pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'diya_dev'
    });
    // Step2: get connection
    const dbTest = async () => {
      try {

        const connection = await pool.getConnection(async conn => conn);
        try {
          // await connection.beginTransaction();
          var query = "Select * from users_alert_rules";
          const [rows] = await connection.query(query);
          // await connection.commit();
          connection.release();
          // console.log(rows);
          return rows;
        } catch (error) {
          console.log('Query Error');
          connection.release();
          return false;
        }
      } catch (error) {
        console.log('DB Error');
        return false;
      }
    };
    var rows = await dbTest();
    if (!rows) {
      console.log("fail");
    }
    console.log(rows);
    console.log("dbTest");
  }
  catch (err) {
    console.log("ist");
  }
}

function range() {
  var res2={'a':1,'b':2};
  
  for (var i in res2){
    console.log(i);
  }
}
// mysql_handling2();
try {
  range();
} catch (error) {
  console.log(error.message);
}