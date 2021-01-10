const faunadb = require('faunadb'),
  q = faunadb.query;
const faunaClient = new faunadb.Client({ secret: process.env.NEXT_PUBLIC_FAUNADB_SECRET });
const authClient = (secret) => new faunadb.Client({ secret });

//#region Courses
const getCourses = async () => {
    // const { data } = await faunaClient.query(
    //     q.Map(
    //         q.Paginate(q.Documents(q.Collection("Course"))),
    //         q.Lambda("ref", q.Get(q.Var("ref")))
    //     )
    // );only returns 64 so I belive we need to return an index
    // const data = faunaClient.query(
    //     q.Match(q.Index('allCourses'))
    //   ).then(function(response) {
    //       console.log("response below");
    //     console.log(response) // Would log the ref to console.
    //   });

      var data = await faunaClient.paginate(q.Match(q.Index('allCourses'))).map(function(ref) {
        return q.Get(ref)
      });
      //console.log(data.each(function(course){console.log(course);}));
    //   data
    //        .map(function(ref) {
    //          return q.Get(ref)
    //        })
    //        .each(function(course) {
    //          console.log(course) // Will now log the retrieved documents.
    //        })
    
    // const courses = await data.map((course) => {
    //     course.id = course.ref.id;
    //     delete course.ref;
    //     return course;
    // });
    //console.log("awaiting data");
//console.log(data ? data : "data is null or slow ");

    return data;
};

const getUserCourses = async () => {
    //TODO: add user logic
    const { data } = await faunaClient.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection("UserCourse"))),
            q.Lambda("ref", q.Get(q.Var("ref")))
        )
    );
    const courses = data.map((course) => {
        course.id = course.ref.id;
        delete course.ref;

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
//#region

//#region UserCourse
const updateCourse = async (id, code, language, name, description) => {
    //TODO: update Course
};

const deleteCourse = async (id) => {
    //TODO: delete Course
};
const createUserCourse = async (user, course) => {
    console.log(user);
    const userCourse = {
        name: course.data.name,
        provider: course.data.provider,
        date: course.data.date,
        hours: course.data.hours,
        governingAgency: course.data.governingAgency,
        saved: "true",
    };

    return await faunaClient.query(
        q.Create(q.Collection("UserCourse"), {
            data: {
                userCourse,
            },
        })
    );
};
const claimCourse = async (id) => {
    //TODO: claim Course
};
//#endregion

//#region Credits
const getCredits = async () => {
    const { data } = await faunaClient.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection("Credits"))),
            q.Lambda("ref", q.Get(q.Var("ref")))
        )
    );
    const credits = data.map((credit) => {
        credit.id = credit.ref.id;
        delete credit.ref;

        return credit;
    });

    return courses;
};

const createCredit = async () => {
    //TODO: create Credit
};

const updateCredits = async (id, date, name, hours) => {
    //TODO: update Course
};

const deleteCredit = async (id) => {};
//#region

//#region Profile
const getUser = async (id) => {
    //TODO: get Profile by id
};

const updateUser = async () => {};
//#region

module.exports = {
    getCourses,
    getUserCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
    authClient,
    faunaClient,
    getUpcomingCourses,
    createUserCourse,
    claimCourse,
    getCredits,
    createCredit,
    updateCredits,
    deleteCredit,
    getUser,
    updateUser,
};
