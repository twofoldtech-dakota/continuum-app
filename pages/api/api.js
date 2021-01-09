import useFetch from "../lib/useFetch";

function getData(data) {
    if (!data || data.errors) return null;
    return data.data;
}

function getErrorMessage(error, data) {
    if (error) return error.message;
    if (data && data.errors) {
        return data.errors[0].message;
    }
    return null;
}

export const GET_COURSES = () => {
    const query = `query{
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
    const { data, error } = useFetch(
        process.env.NEXT_PUBLIC_FAUNADB_GRAPHQL_ENDPOINT,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB_SECRET}`,
                "Content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                query,
            }),
        }
    );

    return {
        data: getData(data),
        errorMessage: getErrorMessage(error, data),
        error,
    };
};

export const CREATE_COURSE = async (
    name,
    provider,
    date,
    hours,
    governingAgency,
    saved,
    description,
    required,
    contactName,
    contactPhone
) => {
    const query = `mutation CreateCourse($name: String!, $provider: String!, $date: String!, $hours: Int!, $governingAgency: String!, $saved: Boolean, $description: String, $required: Boolean, $contactName: String, $contactPhone: String) {
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

    const res = await fetch(process.env.NEXT_PUBLIC_FAUNADB_GRAPHQL_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB_SECRET}`,
            "Content-type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            query,
            variables: {
                name,
                provider,
                date,
                hours,
                governingAgency,
                saved,
                description,
                required,
                contactName,
                contactPhone,
            },
        }),
    });
    const data = await res.json();
    console.log(data);
    return data;
};
