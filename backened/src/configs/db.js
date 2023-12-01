const mongoose = require("mongoose");



const connect = () => {
    mongoose.connect("mongodb+srv://pcube1733:rm6uuZL9bbtr0ET8@cluster0.wymddns.mongodb.net/?retryWrites=true&w=majority");
    // mongoose.connect("mongodb+srv://redbus:Redbus@cluster0.ome2c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

}

module.exports = connect;