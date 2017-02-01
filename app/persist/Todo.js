var Datastore = require('nedb')
const path = require('path')

var db = new Datastore({ filename: 'todo.db', autoload: true })


let nextTodoId = 0
class Todo {
  constructor(args) {
    this.id = args._id || args.id || (nextTodoId++).toString()
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

  toggleComplete() {
    this.completed = !this.completed
    return this.update({ completed: this.completed})
  }

  update(changes){
    var todo = this
    return new Promise(function(resolve, reject){
      db.update({ _id: todo.id }, { $set: changes }, function(err, numUpdated){
          if(err){
            reject(err)
          }
          else{
            resolve(new Todo(todo))
          }
      })
    })
  }
}

var create_todo = function(args) {
  var todo = new Todo(args)
  return todo.persist()
}

var destroy_todo = function(id) {
  Todo.destroy(id)
}

var toggle_todo = function(todo) {
  return new Todo(todo).toggleComplete()
}

var all_todos = function(callback) {
  Todo.find(callback)
}

export { create_todo, toggle_todo, destroy_todo, all_todos }

