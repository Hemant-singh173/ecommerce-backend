const { default: mongoose } = require('mongoose');

const dbConnect = () => {

    try {
        const conn =  mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
        console.log('Database connected successfully');
    } catch (error) {
       console.log('Database Error');
    }
}

module.exports = dbConnect