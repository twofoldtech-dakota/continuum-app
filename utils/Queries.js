const GET_COURSES = `query{
    allCourses{
        data {
            name
             _id
            governingAgency
            hours
            saved
            date
        }
    }
}`;

const CREATE_COURSE = `mutation CreateCourse($name: String!, $provider: String!, $date: String!, $hours: Int!, $governingAgency: String!, $saved: Boolean, $description: String, $required: Boolean, $contactName: String, $contactPhone: String) {
    createCourse(data: {
      name: $name,
      provider: $provider,
      date: $date,
      hours: $hours,
      governingAgency: $governingAgency,
      saved: $saved,
      description: $description,
      required: $required,
      contactName: $contactName,
      contactPhone: $contactPhone
    }) {
      _id
      _ts
      name
      provider
      date
      hours
      governingAgency
    }
  }`;

module.exports = { 
    GET_COURSES, 
    CREATE_COURSE 
};
