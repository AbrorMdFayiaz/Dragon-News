
import dns from "node:dns"
dns.setServers(['8.8.8.8','8.8.4.4'])

import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
// import { client } from "@/db"; // your mongodb client

const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING);
const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(client.db("dragon-news-56"), { client }),
      //...other options
  emailAndPassword: { 
    enabled: true, 
  }, 

});