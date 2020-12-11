import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import Logo from "../svgs/logo";

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
<div className="header">
  <div className="logo">
    <a href="#"><Logo className="img-fluid"/></a>
    <h3>Continuing Education Tracker</h3>
  </div>
  <div className="continuum-user">
    <div className="text-box">
      <h3>Catherine Jennings</h3>
      <p>Compass Colorado</p>
    </div>
    <div className="image-holder">
      <a href="#"><img src="" className="img-fluid" src="https://media-exp1.licdn.com/dms/image/C5603AQE1h32pUQ7UoQ/profile-displayphoto-shrink_200_200/0/1591127333018?e=1613001600&v=beta&t=-Pwl5i5ptqyxuy391LNHAWpCF4h38JJJAmckZKGdtjc"/> </a>
    </div> 
  </div>
</div>


    );
};

export default Header;
