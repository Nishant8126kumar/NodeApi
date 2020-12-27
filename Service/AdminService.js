var database = require('../Repositories/Connection')

async function getAllInfo() {
    let data;
    try {
        data = await database.getDb().collection("Fretron").find({}).toArray()
        return data;
    } catch (e) {
        console.log("Some Exception Are Occured =:" + e.message);
    }
}
async function getSpecificStudentData(userInfo) {
    let data;
    try {
        data = await database.getDb().collection("Fretron").findOne({ "Name": userInfo });
        console.log(data);
        return data;
    } catch (e) {
        console.log("Some Exception Are Occured =:" + e.message);
    }
}
module.exports = { getAllInfo, getSpecificStudentData }