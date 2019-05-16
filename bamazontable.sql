CREATE DATABASE bamazon;

use mysql;
update user set authentication_string=password(''), plugin='mysql_native_password' where user='root';


CREATE TABLE products(
	item_id INT(10) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(40) NOT NULL,
    department_name VARCHAR(40) NOT NULL,
    price DOUBLE(8, 2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products
(product_name, department_name, price, stock_quantity)
VALUES
('Paper', 'Stationary', 2.25, 100),
('Pencil', 'Stationary', 1.66, 95),
('Chalk', 'Stationary', 1.10, 50),
('Headphones', 'Electronics', 25.60, 20),
('USB Cable', 'Electronics', 4.50, 42),
('Laptop', 'Electronics', 320, 10),
('Hat', 'Clothing', 15, 60),
('Shirt', 'Clothing', 12, 60),
('Shoes', 'Clothing', 18, 30),
('Jacket', 'Clothing', 25, 42);

SELECT * FROM products;