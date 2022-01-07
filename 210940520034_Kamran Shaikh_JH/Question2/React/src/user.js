const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

console.log("Hello");


const dbinfo = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "chat"
};


const record = {

    sender: "John Snow",
    receiver: "Danaerys",
    msg: "Good Morning"
};

const addingRecord = async (record) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `insert into message (sender,receiver,msg) values (?,?,?)`;
    await connection.queryAsync(sql, [record.sender, record.receiver, record.msg]);
    await connection.endAsync();
    console.log("record added");
}

//addingRecord(record);

const gettingRecord = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `select * from message`;
    const list = await connection.queryAsync(sql, []);
    console.log(list);
    return list;
};

gettingRecord();

module.exports = { addingRecord, gettingRecord };



