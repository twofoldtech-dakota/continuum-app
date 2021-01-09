import {GET_COURSES} from "../../utils/Queries";
import sendQuery from "../../utils/sendQuery";
import formattedResponse from "../../utils/formattedResponse";
export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405);
    }
    try {
        console.log("get courses");
        const snippets = await sendQuery(GET_COURSES);
        return res.status(200).json(snippets);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Something went wrong.' });
    }
}
// export default async function handler (req, res) {

//     try {
//         console.log("send query")

//         const response = await sendQuery(GET_COURSES)
//           .then(function(result) {
//             console.log(result.allCourses);
//             console.log("normal"); 
//             return result.allCourses;// "normalReturn"
//           })
//           .then(function(result){
//             console.log("not normal");
//             return result;
//           });
//         if(response){
//             res.end();
//             console.log("response", response);

//             return response;
//         }
//         return response;
//     } catch (err) {
//         console.error(err);
//         res.end();
//         return error;
//         //return formattedResponse(500, { err: 'Something went wrong' });
//     }


//     // try {
//     //     const courses = await getCourses();
//     //     return res.status(200).json(courses);
//     // } catch (err) {
//     //     console.error(err);
//     //     res.status(500).json({ msg: "Something went wrong." });
//     // }
// };

//export default async function handler(req, res) {
    
    // console.log("getCourses");
    // try {
    //     if (req.method !== "GET") {
    //         return res.status(405);
    //     }

    //     const response = await sendQuery(GET_COURSES);
    //     const data = response.allCourses.data; //res.allCourses.data
    //     res.end();
    //     return formattedResponse(200, data);
    // } catch (err) {
        
    //     res.end();
    //     return(console.error(err));
        //return formattedResponse(500, { err: 'Something went wrong' });
    //}

    
//}




