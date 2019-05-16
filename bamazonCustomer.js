require("dotenv").config();

const mysql = require("mysql");
const inquirer = require('inquirer');




const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DATABASE_PASSWORD,
    // password: "Valace73!",
    database: "bamazon",
    insecureAuth: true
    
    
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("You are connected to: " + connection.threadId);
    store();
});

function store() {
    connection.query("SELECT * FROM products", function(err, res) {
        if(err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
    });
}