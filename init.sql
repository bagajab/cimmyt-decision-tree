CREATE DATABASE IF NOT EXISTS decision_tree_db;
CREATE USER IF NOT EXISTS 'first_user'@'%' IDENTIFIED BY 'first_password';
GRANT ALL PRIVILEGES ON decision_tree_db.* TO 'first_user'@'%';
FLUSH PRIVILEGES;
