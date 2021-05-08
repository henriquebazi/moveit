import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url'

let cachedDb: Db = null

async function connetToDB(uri: string) {
  if(cachedDb) {
    return cachedDb
  }

  const client = await MongoClient.connect( uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const dbName = url.parse(uri).pathname.substr(1)

  const db = client.db(dbName)

  cachedDb = db

  return db
}

export default async (req: NowRequest, res: NowResponse) => {
  const { username } = req.body

  const db = await connetToDB(process.env.MONGODB_URI)

  const collection = db.collection('login-github')

  await collection.insertOne({
    username,
    date: new Date(),
  })

  return res.status(201).json({ ok: true})
}