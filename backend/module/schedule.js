var db = require('../dbconnection'); //reference of dbconnection.js file

var Task ={
    getSchedule:function(callback)
    {
        return db.query("select * from schedule", callback);     
    },
     getFormById:function(id, callback)
     {
      return db.query("select * from schedule where id=?",[id],callback);
     },
  
     addSchedule:function(form,callback)
      {
        return db.query("Insert into schedule (slot_time, first_name,last_name, mobileNo,date_now) values(?,?,?,?,?)",[    
        form.slot_time,
        form.first_name, 
        form.last_name, 
        form.mobileNo,
        form.date_now
      ],callback );
      },

    //  deleteForm:function(id,callback)
    //  {
    //     return db.query("delete from schedule where id=?",[id],callback);
    //  },
     editSchedule:function(form,callback)
     {
        return db.query("update schedule set slot_time=?, first_name=?,last_name=?, mobileNo=?, date_now=? where id=?",[
          form.slot_time,
          form.first_name, 
          form.last_name, 
          form.mobileNo,
          form.date_now,
          form.id
        ],
          callback);
     },
    };


module.exports = Task;