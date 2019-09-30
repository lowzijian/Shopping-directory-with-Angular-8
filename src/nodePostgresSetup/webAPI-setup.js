// database 's initialization
const {Client} = require('pg')

const client = new Client ({
    user: "postgres",
    password:"12345",
    host:"localhost",
    port:5432,
    database:"shopping"

})

const express = require("express")
const app = express();
var cors = require('cors')
app.use(cors())

app.get("/selectQuery" , async (req,res) =>
{
    const result = await readAlltenants()
    res.setHeader("content-type","application/json")
    res.send(JSON.stringify(result))
})
app.listen(8080, () => console.log("Web server is listening .. on port 8080"));


async function connect()
{
    try{
        await client.connect()
    }
    catch(error)
    {
        console.error(`Failed to connect database : ERROR ${error}`)
    }
}

async function start(){
    await connect();
}

//select query 
async function readAlltenants(){
    try{
        const results = await client.query("SELECT t.tenant_name, t.tenant_description , t.floor, z.description , t.lot_no from tenants t join zones z ON t.zone_id = z.zone_id");
        return results.rows;
    }
    catch (error){
        return [];
    }
}

start()