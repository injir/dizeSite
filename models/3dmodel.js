var mongoose = require('../db');

var Schema = mongoose.Schema;

var modelSchema = new Schema({
  title:  String,
  author: String,
  body:  String,
  img: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

var Model = mongoose.model('model',modelSchema);
var item = new Model({title:'firstArticle',author:'injir',body:'Ранним утром 28 сентября ожидается полное лунное затмение.Утро понедельника — не самое удобное время, но следующее полное лунное затмение, видимое в европейской части России, произойдёт лишь 27 июля 2018 года: geektimes.ru/p/262790/.'});
Model.findOne({title:'firstArticle'}).exec(function(err,doc){
  if(err){
   throw err;
  }
  if(doc !== null){
    console.log(doc);
  }
  else{
      item.save(function (err) {
      if(err){
    console.log('Что то пошло не так: '+err);
  }
  });
  }
});

  

module.exports = Model;