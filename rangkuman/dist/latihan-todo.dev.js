"use strict";

// Buat todo apps

/**
 * 5 Function : addTodo(),getTodo(),deleteTodo(),updateTodo(),changeStatus()
 * 
 */
// getTodo(todos)

/**
   1. Belajar js [X]
   2. Makan bersama [ ]

 */
// addTodo(tasks)

/*
    Task adalah string, 
    addTodo("Minum bersama")

    Output :
    "Minum bersama" telah di masukkan!

    sehingga dalam todos :
    [
        {
            id: 1,
            task: "Belajar Js",
            status: true
        },
        {
            id: 2,
            task: "Makan bersama",
            status: false
        },
        {
            id : 3,
            task : "Minum bersama",
            status : false
        }
    ]
*/
// deleteTodo(id)

/*
    Menghapus lewat id
*/
var todos = [{
  id: 1,
  task: "Belajar Js",
  status: true
}, {
  id: 2,
  task: "Makan bersama",
  status: false
}];

function getTodo(todos) {
  for (var i = 0; i < todos.length; i++) {
    // Destructuring Object
    var _todos$i = todos[i],
        id = _todos$i.id,
        task = _todos$i.task,
        status = _todos$i.status;

    if (status) {
      console.log("[X] ".concat(id, ". ").concat(task, " "));
    } else {
      console.log("[ ] ".concat(id, ". ").concat(task, " "));
    }
  }
}

function addTodo(task) {
  var id = todos[todos.length - 1].id + 1;
  var status = false;
  todos.push({
    id: id,
    task: task,
    status: status
  });
  console.log("\"".concat(task, "\" telah di masukkan!"));
}

function deleteTodo(id) {
  var temp = [];

  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id !== id) {
      temp.push(todos[i]);
    }
  }

  todos = temp;
  console.log("Id no ".concat(id, " telah di hapus!"));
}

function updateTodo(id, task) {
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i].task = task;
    }
  }

  console.log("Id no ".concat(id, " telah di ganti!"));
}

function changeStatus(id) {
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i].status = !todos[i].status;
    }
  }

  console.log("Id no ".concat(id, " telah di ganti statusnya!"));
}

addTodo("Minum bersama");
addTodo("Maen genshin impact");
addTodo("Lanjutin stardew valley");
getTodo(todos);
deleteTodo(3);
deleteTodo(5);
getTodo(todos);
updateTodo(1, "Belajar array of objects seruuu!");
getTodo(todos);
changeStatus(2);
changeStatus(4);
getTodo(todos);