var connect = require('camo').connect
var database
var db_uri = path.join('nedb://', __dirname, '/dvds')

class Dvd extends Document {
  constructor() {
    super()

    this.title = String
    this.genre = String
  }

}
