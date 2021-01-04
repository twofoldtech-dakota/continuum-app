import { useRouter } from "next/router";
import useSWR from "swr";
import Logo from "../svgs/logo";

const Header = () => {
    const router = useRouter();

    const fetcher = (url) => fetch(url).then((r) => r.json());

    const { data: user, mutate: mutateUser } = useSWR("/api/user", fetcher);
const userName = "dillonosmith";
    const logout = async () => {
        const res = await fetch("/api/logout");
        if (res.ok) {
            mutateUser(null);
            router.push("/login");
        }
    };
    return (

<div className="header">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Features</a>
      <a className="nav-item nav-link" href="#">Pricing</a>
      <a className="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>
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
