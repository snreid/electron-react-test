var Datastore = require('nedb')
const path = require('path')

var db = new Datastore({ filename: 'todo.db', autoload: true })


let nextTodoId = 0
class Todo {
  constructor(args) {
    this.id = args._id || (nextTodoId++).toString()
    this.text = args.text
    this.completed = args.completed || false
  }

  static find(callback) {
    db.find({}, function(err, docs) {
      var todos = docs.map(function(doc){
        return new Todo(doc)
      })
      callback(todos)
    })
  }

  static destroy(_id) {
    db.remove({_id: _id})
  }

  persist() {
    var doc = this.doc()
    return new Promise(function(resolve, reject){
      db.insert(doc, function(err, todo){
        if(err){
          reject(err)
        }
        else{
          resolve(new Todo(todo))
        }
      })
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
  return todo.persist()
}

var destroy_todo = function(id) {
  Todo.destroy(id)
}

var all_todos = function(callback) {
  Todo.find(callback)
}

export { create_todo, destroy_todo, all_todos }

