const { loadTodos, saveTodos } = require('./utils');

const command = process.argv[2];
const input = process.argv.slice(3).join(' ');

switch (command) {
  case 'list':
    const todos = loadTodos();
    if (todos.length === 0) {
      console.log('Belum ada todo.');
    } else {
      console.log('Daftar Todo:');
      todos.forEach((todo, i) => console.log(`${i + 1}. ${todo}`));
    }
    break;

  case 'add':
    if (!input) {
      console.log('Masukkan todo yang ingin ditambahkan.');
      break;
    }
    const newTodos = loadTodos();
    newTodos.push(input);
    saveTodos(newTodos);
    console.log(`Berhasil menambahkan todo: "${input}"`);
    break;

  case 'remove':
    const index = parseInt(input) - 1;
    const currentTodos = loadTodos();
    if (isNaN(index) || index < 0 || index >= currentTodos.length) {
      console.log('Nomor todo tidak valid.');
    } else {
      const removed = currentTodos.splice(index, 1);
      saveTodos(currentTodos);
      console.log(`Berhasil menghapus: "${removed[0]}"`);
    }
    break;

  default:
    console.log(`Perintah tidak dikenal. Gunakan:
  - node index.js list         → Lihat todo
  - node index.js add [task]   → Tambah todo
  - node index.js remove [no]  → Hapus todo`);
}