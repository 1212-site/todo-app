// utils.js
const fs = require('fs');
const filePath = './todo.json';

function loadTodos() {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

function saveTodos(todos) {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
}

module.exports = { loadTodos, saveTodos };
