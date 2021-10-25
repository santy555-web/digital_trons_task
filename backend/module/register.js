var db = require('../dbconnection'); //reference of dbconnection.js file

var Task ={
    getForm:function(form,callback)
    {
        return db.query("select * from register where email=?" ,[form.email],callback);     
    }, 
     addForm:function(form,callback)
      {
        return db.query("Insert into register (name,email,password, mobileNo) values(?,?,?,?)",[    
        form.name, 
        form.email, 
        form.password, 
        form.mobileNo
      ],callback );
      },
     editForm:function(id,form,callback)
     {
        return db.query("update register set name=?, email=?,password=?, mobileNo=? where id=?",[
          form.name,
          form.email, 
          form.password, 
          form.mobileNo,
          id
        ],
          callback);
     },
    };


module.exports = Task;