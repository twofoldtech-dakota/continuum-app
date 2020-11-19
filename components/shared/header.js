import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const Header = () => {
    const router = useRouter();

    const fetcher = (url) => fetch(url).then((r) => r.json());

    const { data: user, mutate: mutateUser } = useSWR("/api/user", fetcher);

    const logout = async () => {
        const res = await fetch("/api/logout");
        if (res.ok) {
            mutateUser(null);
            router.push("/login");
        }
    };

    return (
        <div className="bg-blue">
            <div className="logo">
                <a href="#">
                    <img
                        src="../../assets/images/credits-icon.svg"
                        alt=""
                        className="img-fluid"
                    />
                </a>
                <h3>Continuing Education Tracker</h3>
            </div>
            <div className="continuum-user">
                <div className="text-box">
                    <h3>Catherine Jennings</h3>
                    <p>Compass Colorado</p>
                </div>
                <div className="image-holder">
                    <a href="#">
                        <img
                            src="../../assets/images/user-img.png"
                            alt=""
                            className="img-fluid"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
