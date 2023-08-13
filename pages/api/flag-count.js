import fsPromises from "fs/promises";
import path from "path";

const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

const dataFilePath = path.join(process.cwd(), "data/flagCount.json");


async function getPosts(req,res){
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts

        await db
            .collection('daily-count')
            .deleteOne({countryCode: "Error"})

        let posts = await db
            .collection('count')
            .find({})
            .sort({count: -1})
            // .limit(12)
            .toArray();
        // return the posts

        let total=0;

        for(let i=0; i<posts.length; i++){
            total = total + posts[i].count;
        }

        posts = posts.slice(0,12);


        return res.json({
            message: JSON.parse(JSON.stringify(posts)),
            total: total,
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}


async function addCount(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();

        // console.log(req.body)
        

        let posts = await db
            .collection('count')
            .find({countryCode: req.body.code})
            .toArray();

            // console.log(posts)

            let data = {}
            data.countryCode= req.body.code
        if(posts.length===0){
            // console.log("empty")
            data.count = 1
            await db.collection('count').insertOne(data);
        }
        else{
            // console.log("update")
            data.count = posts[0].count + 1;
            // console.log(data)
            // console.log(data)
            // add the post
            await db.collection('count').updateOne(
                {
                    countryCode: req.body.code,
                },
                { $set: {count: data.count}}
            );
        }
        // return a message
        return res.json({
            message: 'Post added successfully',
            success: true,
        });
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Read the existing data from the JSON file
    return getPosts(req,res)
    // const jsonData = await fsPromises.readFile(dataFilePath);
    // const objectData = JSON.parse(jsonData);

    // res.status(200).send(objectData);
  } else if (req.method === "POST") {
    return addCount(req, res)
    // try {
    //     // Read the existing data from the JSON file
    //     const jsonData = await fsPromises.readFile(dataFilePath);
    //     const objectData = JSON.parse(jsonData);
  
    //     // Get the data from the request body
    //     const { countryCode } = req.body;
  
    //     // Add the new data to the object
    //     const newData = {
    //         ...objectData,
    //         [countryCode]: objectData[countryCode]? objectData[countryCode]+1 : 1
    //     };
    //     // objectData.push(newData);
  
    //     // Convert the object back to a JSON string
    //     const updatedData = JSON.stringify(newData);
  
    //     // Write the updated data to the JSON file
    //     await fsPromises.writeFile(dataFilePath, updatedData);
  
    //     // Send a success response
    //     res.status(200).json({ message: 'Data stored successfully' });
    //   } catch (error) {
    //     console.error(error);
    //     // Send an error response
    //     res.status(500).json({ message: 'Error storing data' });
    //   }
  }
}









// export default async function handler(req, res) {
//     // switch the methods
//     switch (req.method) {
//         case 'GET': {
//             return getPosts(req, res);
//         }

//         case 'POST': {
//             return addPost(req, res);
//         }

//         case 'PUT': {
//             return updatePost(req, res);
//         }

//         case 'DELETE': {
//             return deletePost(req, res);
//         }
//     }
// }