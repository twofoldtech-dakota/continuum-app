import useSWR from "swr";
import Courses from "../components/courses/Courses";
import { getAuthCookie } from "../utils/auth-cookies";
import Layout from "../components/shared/layout";

export default function Home() {
    const { data } = useSWR("/api/user");

    const { data: courses, mutate } = useSWR("/api/courses");

    return (
        <Layout title="Continuum - Dashboard">
            <Courses />
            <div className="credits-earned-modal active">
  <div className="cross-icon">
    <a href="#"><img src="images/cross-icon.svg" alt="" /></a>
  </div>
  <div className="text-box">
    <h3>4 Credits Earned</h3>
    <p>Contracts, Purchases, and Sales Agreements</p>
    <a href="#">All Service Real Estate Academy <img src="images/expend-icon.svg" alt="" /></a>
  </div>
  <div className="calendar-text creadit-date">
    <p>COURSE DATE</p>
    <form>
      <input type="text" className="form-control" id="startDate" placeholder="11/09/2019" />
      <span><img src="images/calendar-icon.svg" alt="" /></span>
    </form>
  </div>
  <div className="upload">
    <h4>UPLOAD CERTIFICATE</h4>
    <div className="upload-inner">
      <a href="#">
        <p><img src="images/image-icon.svg" alt="" />certificate-name-xyz.png</p>
        <img src="images/trash-icon.svg" alt="" />
      </a>
      <div className="image-holder">
        <img src="images/certificate-img.png" alt="" className="img-fluid" />
      </div>
    </div>
  </div>
  <a className="save-btn" href="#">Save Changes</a>
</div>

        </Layout>
    );
}

export async function getServerSideProps(ctx) {
    const token = getAuthCookie(ctx.req);

    return { props: { token: token || null } };
}
