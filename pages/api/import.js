import { courseData } from "../../data/courses/coursesImport";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405);
    }

    try {
        console.log(courseData);
        return res.status(200).json(courses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Something went wrong." });
    }
}
