const faunadb = require("faunadb");
const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });
const authClient = (secret) => new faunadb.Client({ secret });
const q = faunadb.query;

const getCourses = async () => {
    const { data } = await faunaClient.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection("Course"))),
            q.Lambda("ref", q.Get(q.Var("ref")))
        )
    );
    const courses = data.map((course) => {
        course.id = course.ref.id;
        course.data.date = course.data.date;
        delete course.ref;
        console.log(course);
        return course;
    });

    return courses;
};

const getUpcomingCourses = async () => {
    faunaClient.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection("Course"))),
            q.Lambda("ref", q.Get(q.Var("ref")))
        )
    );
};

const getCourseById = async (id) => {
    //TODO: get Course by id
};

const createCourse = async (code, language, description, name) => {
    //TODO: create Course
};

const updateCourse = async (id, code, language, name, description) => {
    //TODO: update Course
};

const deleteCourse = async (id) => {
    //TODO: delete Course
};

module.exports = {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
    authClient,
    faunaClient,
};
