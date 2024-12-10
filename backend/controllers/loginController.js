const db = require('../config/db.js');

exports.createLogin = (req,res)=>{
    const {name,email,contactno,password} = req.body;
    const query = `Insert into login (name,email,contactno,password) values (?,?,?,?)`;
    db.query(query,[name,email,contactno,password],(err,result)=>{
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Login added successfully'});
    })
};