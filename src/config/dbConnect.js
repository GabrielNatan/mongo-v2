import mongoose from "mongoose";

mongoose.connect('mongodb://root:MongoDB2019!@localhost:27017/', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

export default db;