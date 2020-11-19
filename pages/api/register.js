import { query as q } from "faunadb";
import { faunaClient } from "../../utils/Fauna";
import { setAuthCookie } from "../../utils/auth-cookies";

export default async function signup(req, res) {
    const { email, password, governingAgency } = req.body;

    if (!email || !password) {
        return res.status(400).send("Email and Password not provided");
    }

    try {
        const existingEmail = await faunaClient.query(
            // Exists returns boolean, Casefold returns normalize string
            q.Exists(q.Match(q.Index("user_by_email"), q.Casefold(email)))
        );

        if (existingEmail) {
            return res.status(400).send(`Email ${email} already exists`);
        }

        const user = await faunaClient.query(
            q.Create(q.Collection("User"), {
                credentials: { password },
                data: {
                    email,
                    governingAgency,
                },
            })
        );

        if (!user.ref) {
            return res.status(404).send("user ref is missing");
        }

        const auth = await faunaClient.query(
            q.Login(user.ref, {
                password,
            })
        );

        if (!auth.secret) {
            return res.status(404).send("auth secret is missing");
        }

        setAuthCookie(res, auth.secret);

        res.status(200).end();
    } catch (error) {
        console.error(error);
        res.status(error.requestResult.statusCode).send(error.message);
    }
}
