import { query as q } from "faunadb";
import { getAuthCookie } from "../../utils/auth-cookies";
import { authClient } from "../../utils/Fauna";

export default async function user(req, res) {
    const token = getAuthCookie(req);

    if (!token) {
        console.log("auth token not found");
        return res.status(401).send("Auth cookie not found");
    }

    try {
        const { ref, data } = await authClient(token).query(
            q.Get(q.Identity())
        );
        console.log("auth token found: " + ref.id);
        res.status(200).json({ ...data, id: ref.id });
    } catch (error) {
        console.error(error);
        res.status(error.requestResult.statusCode).send(error.message);
    }
}
