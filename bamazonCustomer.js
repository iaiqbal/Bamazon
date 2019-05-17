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
    storeDisplay();
});

function storeDisplay() {
    connection.query("SELECT * FROM products", function(err, res) {
        if(err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
    });
}

storeChoice();

function storeChoice() {
    inquirer
        .prompt([
            {
            name: "id",
            type: "input",
            message: "What is the ID of the item you'd like to purchase?"
            },
            {
            name: "amount",
            type: "input",
            message: "How many would you like?"
            }
        ])

.then(function(answer) {
    // const item = input.item_id;
    // const stockQuantity = input.stock_quantity;
    
    const query = "Select stock_quantity, price, department_name FROM products WHERE ?";
    connection.query(query, {item_id: answer.id}, function(err, res) {
        if (err) throw err;

        let stock = res[0].stock_quantity;
        let price = res[0].price;
        let department = res[0].department_name

        // Need to check if there's enough in stock for customer

        if (stock >= answer.amount) {
            finishCheckout(stock, price, department, answer.id, answer.amount);
        } 
        else {
            console.log("Sorry, we're out of that item.");
        }

    });

});
}
