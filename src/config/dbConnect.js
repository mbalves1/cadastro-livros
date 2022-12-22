import mongoose from "mongoose";

mongoose.connect("mongodb+srv://murilo:mnbvcxz1234@cluster0.pztmrzb.mongodb.net/node-livros");

const db = mongoose.connection;

export default db;