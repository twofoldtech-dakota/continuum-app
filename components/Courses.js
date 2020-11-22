import Head from "next/head";
import useSWR from "swr";
import Link from "next/link";
import Course from "../components/Course";

export default function Courses() {

    return (
        <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div className="upcoming-courses"> 
            <div className="upcoming-courses-inner">
              <div className="credir-look">
                <div className="credir-look-left">
                  <form>
                    <input type="text" className="form-control" placeholder="Look up a credit" />
                    <a href><img src="images/search-icon.svg" alt="" /></a>
                  </form>
                </div>
                <div className="credir-look-sort">
                  <div className="continuum-select">
                    <p>SORT BY </p>
                    <select className="form-control">
                      <option>Date Completed</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table>
                  <tbody>
                    {/* {courses &&
                        courses.map((course) => (
                            <Course
                                key={course.id}
                                course={course}
                                courseDeleted={mutate}
                            />
                        ))} */}
                  </tbody>
                </table>
              </div>
              <div className="show-result">
                <p>Showing 20 of 248 results</p>
                <ul>
                  <li><a href="#"><img src="images/left-arrow.svg" alt="" /></a></li>
                  <li><a href="#"><img src="images/right-arrow2.svg" alt="" /></a></li> 
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"></div> 
      </div>
      


            
        
    );
}
