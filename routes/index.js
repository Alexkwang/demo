var express = require('express');
var router = express.Router();
var user = require('../database/db').user;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

  /* login */
  router.get('/login', function(req, res) {
        res.render('login', { title: 'login' });
  });
  
   /* add user */
  router.get('/adduser', function(req, res) {
	  debugger;
	  
        res.render('adduser', { title: 'add user' });
  });
  
    /* ucenter   */
  router.post('/ucenter', function(req, res) {
          var query = {name: req.body.name, password: req.body.password};
          (function(){
                  user.count(query, function(err, doc){    //count返回集合中文档的数量，和 find 一样可以接收查询条件。query 表示查询的条件
                        if(doc == 1){
                            console.log(query.name + ":login Success at " + new Date());
                            res.render('ucenter', { title:'ucenter' });
                        }else{
                            console.log(query.name + ": login false at " + new Date());
                            res.redirect('/');
                        }
                });
          })(query);
  });

  /*add user to db*/
  router.post('/userlist',function(req,res){

  var arvind = new user({name : req.body.name,password: req.body.password});
      arvind .save(function (err, data) {
           if (err){
                     console.log(err);
                   } else {
                     console.log('Saved : ', data );
                     res.render('userlist', { title:'userlist' });
                  }
              });
		
  });
  
module.exports = router;
