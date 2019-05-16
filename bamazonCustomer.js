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
});