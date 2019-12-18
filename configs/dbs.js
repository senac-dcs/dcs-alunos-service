const mongoose = require('mongoose');

if (process.env.APP_ENV == 'development'){
    var url = 'mongodb://'+process.env.DB_HOST+':'+process.env.DB_PORT+'/'+process.env.DB_NAME
} else {
    var url = 'mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASS+'@'+process.env.DB_HOST+'/'+process.env.DB_NAME
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