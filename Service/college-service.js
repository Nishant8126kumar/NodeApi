var database = require('../Repositories/Connection')

async function getStudentAllDetails() {
    let data;
    try {
        data = await database.getDb().collection('StudentData').find({}).toArray()
        // console.log(data);
        return data;
    } catch (e) {
        console.log(e.message);
    }
}
async function getDepptStudentDetails(courseId) {
    let data
    var id = courseId;
    try {
        data = await database.getDb().collection('StudentData').findOne({ "_id": id })
        return data;
    }
    catch (e) {
    }
}
module.exports = { getStudentAllDetails, getDepptStudentDetails }