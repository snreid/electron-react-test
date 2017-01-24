var Datastore = require('nedb')
const path = require('path')

var db = new Datastore({ filename: '../db/todo.json'})
db.loadDatabase()

class Todo {
  constructor(args) {
    this.id = args.id
    this.text = args.text
    this.completed = args.completed
  }

  static find() {
    var todos = []
    db.find({}, function(err, docs) {
      docs.map(function(doc){
        todos.push(new Todo(doc))
      })
    })
    return todos
  }

  persist() {
    db.insert(this.doc(), function(err, newDoc){
      return newDoc
    })
  }

  doc() {
    var doc = {
      id: this.id,
      text: this.text,
      completed: this.completed
    }

    return doc
  }
}

var create_todo = function(args) {
  var todo = new Todo(args)
  todo.persist()
  return todo
}

var all_todos = function() {
  Todo.find()
}

export { create_todo, all_todos }

