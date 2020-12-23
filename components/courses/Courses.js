import useSWR from "swr";
import Course from "./Course";

export default function Courses() {
    const { data: courses, mutate } = useSWR("/api/courses");
    const coursesData = [
        {
            name: "Test course 1",
            provider: {
                name: "Provider 1 Testing",
                url: "http://www.google.com"
            },
            date: "12/30/2020",
            hours: 4,
            governingAgency: "Test Governing Agency",
            saved:false
        },
        {
            name: "Test course 2",
            provider: {
                name: "Provider 2 Testing",
                url: "http://www.google.com"
            },
            date: "12/31/2020",
            hours: 5,
            governingAgency: "Test Governing Agency 2",
            saved:false
        },
        {
            name: "Test course 3",
            provider: {
                name: "Provider 3 Testing",
                url: "http://www.google.com"
            },
            date: "12/29/2020",
            hours: 6,
            governingAgency: "Test Governing Agency 3",
            saved:true
        },
        {
            name: "Test course 4",
            provider: {
                name: "Provider 4 Testing",
                url: "http://www.google.com"
            },
            date: "12/30/2020",
            hours: 4,
            governingAgency: "Test Governing Agency 4",
            saved:false
        },
];
    return (
        <div>
        <div className="table-responsive">
            <table>
                <tbody>
                    {coursesData &&
                        coursesData.map((course) => (
                            <Course
                                key={course.name}
                                course={course}
                                //courseDeleted={mutate}
                                //courseSaved={mutate}
                            />
                        ))}
                </tbody>
            </table>
        </div>

        <div class="overly"></div>
        <div class="credits-earned-modal credits-panel-modal">
            <div class="cross-icon">
                <a href="#"><img src="images/cross-icon.svg" alt="" /></a>
            </div>
            <div class="text-box">
                <h3>Claim Credit Hours</h3>
                <p>Contracts, Purchases, and Sales Agreements</p>
                <a href="#">All Service Real Estate Academy <img src="images/expend-icon.svg" alt="" /></a>
            </div>
            <div class="panel-text">
                <h4>DESCRIPTION</h4>
                <p>In this course, the student will learn about the types of general contracts as well as the different kinds of real estate contracts. The course begins by providing the student with an overview of the various types of contracts: bilateral, unilateral, implied, express, executed, executory, valid, void, voidable, and unenforceable. Once the student is introduced to the different types of contracts, he or she learns what makes a contract <a  href="#"> more </a></p>
                <span>CREDITS</span>
                <strong>4 continuing education credit hours</strong>
            </div>
            <div class="calendar-text">
                <p>COURSE DATE</p>
                <div class="media">
                    <form>
                        <input type="text" class="form-control" id="startDate" placeholder="11/09/2019" />
                        <span><img src="images/calendar-icon.svg" alt="" /></span>
                    </form>
                    <span>Select the date indicated on your certificate.</span>
                </div>
            </div>
            <div class="upload">
                <h4>UPLOAD CERTIFICATE</h4>
                <div class="upload-file">
                    <label> <img src="images/file-icon.svg" alt="" /> <span>Select a file</span> from your computer
                        <input type="file" size="60" ></input>
                    </label> 
                </div>
            </div>
            <a class="save-btn" href="#">Save & Claim Credits</a>
        </div>
         <div class="nice-job-modal">
            <div class="cross-icon">
                <a href="#"><img src="images/cross-icon.svg" alt="" /></a>
            </div>
             <div class="nice-job-text">
                 <h2>Nice job!</h2>
                 <p>Your credits have been saved to your profile.</p>
                 <img src="images/illo-success.png" alt="" class="img-fluid" />
             </div> 
            <a class="save-btn" href="#">Continue</a>
        </div>

        </div>
    );
}
