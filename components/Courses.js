import useSWR from "swr";
import Course from "../components/Course";

export default function Courses() {
    const { data: courses, mutate } = useSWR("/api/courses");
    return (
<div>
   
    <div className="continuum-detail">
  <div className="title">
    <h3>Available Courses</h3>
    <div className="all-courses">
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">All Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Saved Courses</a>
        </li>  
      </ul>
    </div>
  </div>
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
              {courses &&
                courses.map((course) => (
                    <Course
                        key={course.id}
                        course={course}
                        courseDeleted={mutate}
                        courseSaved={mutate}
                    />
                ))}
                
                
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
    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div> 
  </div>
</div>
{/* <tr>
                  <td width="60%">
                    <div className="upcomingp-courses-select">
                      <label className="check ">
                        <input type="checkbox" name="is_name" />
                        <span className="checkmark" />
                      </label>
                      <div className="text-box">
                        <h4>Colorado 2020 Annual Commission Update</h4>
                        <p>Armbrust Real Estate Institute</p>
                      </div>
                    </div>
                  </td>
                  <td>March 10, 2020</td>
                  <td><span>4 hours</span></td>
                  <td><img src="images/blank-star-icon.svg" alt="" /></td>
                  <td><a className="claim-btn" href="#">Claim</a></td>
                </tr> */}
</div>
        
        
            
        
    );
}
