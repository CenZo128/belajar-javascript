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

let todos = [
    {
        id: 1,
        task: "Belajar Js",
        status: true
    },
    {
        id: 2,
        task: "Makan bersama",
        status: false
    }
]

function getTodo(todos) {
    for (let i = 0; i < todos.length; i++) {
        // Destructuring Object
        const { id, task, status } = todos[i];

        if (status) {
            console.log(`[X] ${id}. ${task} `)
        } else {
            console.log(`[ ] ${id}. ${task} `)
        }
    }
}

function addTodo(task) {
    let id = todos[todos.length - 1].id + 1
    let status = false

    todos.push({
        id,
        task,
        status
    })
    console.log(`"${task}" telah di masukkan!`)
}

function deleteTodo(id) {
    let temp = []
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id !== id) {
            temp.push(todos[i])
        }
    }
    todos = temp 
    console.log(`Id no ${id} telah di hapus!`)
}

function updateTodo(id, task) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            todos[i].task = task
        }
    }
    console.log(`Id no ${id} telah di ganti!`)
}

function changeStatus(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            todos[i].status = !todos[i].status
        }
    }
    console.log(`Id no ${id} telah di ganti statusnya!`)
}

addTodo("Minum bersama")
addTodo("Maen genshin impact")
addTodo("Lanjutin stardew valley")
getTodo(todos)
deleteTodo(3)
deleteTodo(5)
getTodo(todos)
updateTodo(1, "Belajar array of objects seruuu!")
getTodo(todos)
changeStatus(2)
changeStatus(4)
getTodo(todos)
