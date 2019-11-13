const configs = require('./proprieties.json');
const mongoose = require('mongoose');

if (configs.APP_ENV == 'development'){
    var url = 'mongodb://'+configs.DB_HOST+':'+configs.DB_PORT+'/'+configs.DB_NAME
} else {
    var url = 'mongodb+srv://'+configs.DB_USER+':'+configs.DB_PASS+'@'+configs.DB_HOST+'/'+configs.DB_NAME
}

mongoose.connect(url, {useUnifiedTopology: true,useNewUrlParser: true});
var db = mongoose.connection;

db.on('error', function(err) {console.log('Error on MongoDB: '+err);});

db.on('connected', function(){console.log('Connected to MongoDB! URL => '+url);});

db.on('disconnected', function() {console.log('MongoDB connection disconnected');});
process.on('SIGINT', function(){
    db.close(function(){
      console.log("MongoDB connection is disconnected due to application termination");
       process.exit(0);
      });
});