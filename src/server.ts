require('dotenv').config()
import mongoose from "mongoose";
import { Server } from "node:http";
import app from "./app";
import dns from 'dns'

let server: Server

dns.setServers(["1.1.1.1", "8.8.8.8"])

const port = process.env.PORT || 5000

 async function main(){

    try {
        await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.faxnq.mongodb.net/Library_Management?appName=Cluster0`)

        console.log('connected to mongodb');

        server = app.listen(port, () => {
            console.log(`listening from ${port}`);

        })
    } catch (error) {
        console.log(error);

    }
}


main()