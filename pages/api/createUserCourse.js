import { createUserCourse } from "../../utils/Fauna";
export default async function handler(req, res) {
    const { user, course } = req.body;
    if (req.method !== "POST") {
        return res.status(405).json({ msg: "Method not allowed" });
    }
    try {
        console.log("api/saveCourse");

        const saved = await createUserCourse(user, course);
        console.log(saved);
        return res.status(200).json(saved);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Something went wrong." });
    }
}
