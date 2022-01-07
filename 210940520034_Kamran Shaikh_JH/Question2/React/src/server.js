const express = require('express');
const app = express();
app.use(express.json());
const { addingRecord, gettingRecord } = require('./user');

const cors = require('cors');
app.use(cors());

app.get("/getting-records", async (req, res) => {
    const list = await gettingRecord();
    res.json(list);
});


app.post("/adding-records", async (req, res) => {
    const user = req.body;
    await addingRecord(user);
    res.json("record addded")
});

app.listen(4800, () => {

    console.log("executed");
});






