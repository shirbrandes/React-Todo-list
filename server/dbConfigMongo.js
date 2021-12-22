const { connect } = require('mongoose')


module.exports.connectToMongoDB = async () => {
    try {
        await connect('mongodb://localhost/shirtest')
        console.log("connected to mongo =)")
    } catch (err) {
        console.log(err)
    }
}
