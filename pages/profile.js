import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import Layout from "../components/shared/layout";

export default function Profile() {
    const router = useRouter();

    const [errorMessage, setErrorMessage] = useState("");

    const { handleSubmit, register, errors } = useForm();

    const onSubmit = handleSubmit(async (formData) => {
        if (errorMessage) setErrorMessage("");

        try {
            const res = await fetch("/api/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push("/");
            } else {
                throw new Error(await res.text());
            }
        } catch (error) {
            console.error(error);
            setErrorMessage(error.message);
        }
    });
    const handleChange = function (e){
        this.setState({selectValue:e.target.value});
    }
    

    return (
        <Layout title="Continuum - Profile">
<div className="continuum-detail profile-edit">
<form onSubmit={onSubmit}>
  <div className="title">
    <h3>Public Profile</h3>
    <a className="btn-default" href="#">View Profile</a>
    <a className="btn-default" href="#">Save Changes</a>
  </div>  
  <div className="profile-edit-container">
      {errorMessage && <p role="alert">{errorMessage}</p>}
      

        <div className="form-section col-md-6 col-sm-12">
            <div className="form-group">
                <div className="group-title">PROFILE BASICS</div>
                <div className="form-label">USERNAME</div>
                <input type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="http://getcontinuum.app/"
                                    ref={register({
                                        required: "Username is required",
                                    })}></input>
                <div className="form-subtext">
                    Your username is your unique identifier across the network.
                </div>

                <div className="form-label">NAME</div>
                <input type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder=""
                                    ref={register({
                                        required: "Name is required",
                                    })}></input>
                <div className="form-subtext">
                Help people discover your account by using the name you’re known by: either your full name, nickname, or business name.
                </div>

                <div className="form-label">TITLE</div>
                <input type="text"
                                    name="title"
                                    className="form-control"
                                    placeholder=""
                                    ref={register({
                                        required: "Title is required",
                                    })}></input>

                <div className="form-label">COMPANY</div>
                <input type="text"
                                    name="company"
                                    className="form-control"
                                    placeholder=""
                                    ref={register({
                                        required: "Company is required",
                                    })}></input>

                <div className="form-label">WEBSITE</div>
                <input type="text"
                                    name="website"
                                    className="form-control"
                                    placeholder=""
                                    ref={register({
                                        required: "Website is required",
                                    })}></input>

                <div className="form-label">BIO</div>
                
                <p className="character-count col-sm-2">30/400</p>
                <textarea
                    name="bio"
                    className="form-control bio"
                    maxLength="400"
                ></textarea>
                
                
            </div>
        </div>

        <div className="form-section col-md-6 col-sm-12">
            <div className="form-group">
                <div className="group-title">PERSONAL INFORMATION</div>
                <div className="form-label">EMAIL ADDRESS</div>
                <input type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder=""
                                    ref={register({
                                        required: "Email is required",
                                    })}></input>

                <div className="form-label">WORK/MOBILE PHONE</div>
                <input type="text"
                                    name="phone"
                                    className="form-control"
                                    placeholder=""
                                    ref={register({
                                        required: "Phone number is required",
                                    })}></input>

                <div className="form-label">OFFICE PHONE</div>
                <input type="text"
                                    name="officePhone"
                                    className="form-control"
                                    placeholder="" 
                                    ref={register({
                                        required: "Title is required",
                                    })}></input>

                <div className="form-label">MAILING ADDRESS</div>
                <input type="text"
                                    name="addressLine1"
                                    className="form-control"
                                    placeholder=""
                                    ref={register({
                                        required: "Address is required",
                                    })}></input>
                <input type="text"
                                    name="addressLine2"
                                    className="form-control"
                                    placeholder=""
                                    ></input>
<div className="form-row">
                <div className="form-label col-md-2">CITY</div>
                <input type="text"
                                    name="city"
                                    className="form-control col-sm-12 col-md-5"
                                    placeholder=""
                                    ref={register({
                                        required: "City is required",
                                    })}></input>

                <div className="form-label col-md-2">STATE</div>
                <select class="form-control col-sm-12 col-md-3" ref={register({
                                        required: "Zip is required zip",
                                    })}>
                    <option value="AL">AL</option>
	<option value="AK">AK</option>
	<option value="AR">AR</option>	
	<option value="AZ">AZ</option>
	<option value="CA">CA</option>
	<option value="CO">CO</option>
	<option value="CT">CT</option>
	<option value="DC">DC</option>
	<option value="DE">DE</option>
	<option value="FL">FL</option>
	<option value="GA">GA</option>
	<option value="HI">HI</option>
	<option value="IA">IA</option>	
	<option value="ID">ID</option>
	<option value="IL">IL</option>
	<option value="IN">IN</option>
	<option value="KS">KS</option>
	<option value="KY">KY</option>
	<option value="LA">LA</option>
	<option value="MA">MA</option>
	<option value="MD">MD</option>
	<option value="ME">ME</option>
	<option value="MI">MI</option>
	<option value="MN">MN</option>
	<option value="MO">MO</option>	
	<option value="MS">MS</option>
	<option value="MT">MT</option>
	<option value="NC">NC</option>	
	<option value="NE">NE</option>
	<option value="NH">NH</option>
	<option value="NJ">NJ</option>
	<option value="NM">NM</option>			
	<option value="NV">NV</option>
	<option value="NY">NY</option>
	<option value="ND">ND</option>
	<option value="OH">OH</option>
	<option value="OK">OK</option>
	<option value="OR">OR</option>
	<option value="PA">PA</option>
	<option value="RI">RI</option>
	<option value="SC">SC</option>
	<option value="SD">SD</option>
	<option value="TN">TN</option>
	<option value="TX">TX</option>
	<option value="UT">UT</option>
	<option value="VT">VT</option>
	<option value="VA">VA</option>
	<option value="WA">WA</option>
	<option value="WI">WI</option>	
	<option value="WV">WV</option>
	<option value="WY">WY</option>
                </select>
                
                <div className="form-label col-md-2">ZIP</div>
                <input type="text"
                                    name="zip"
                                    className="form-control col-sm-12 col-md-4"
                                    placeholder=""
                                    ref={register({
                                        required: "Zip is required zip",
                                    })}></input>
</div>



<div class="form-row">
    <div class="form-group col-md-6">
      <label for="form-label">CITY</label>
      <input type="text"
                                    name="city"
                                    className="form-control col-sm-12 col-md-5"
                                    placeholder=""
                                    ref={register({
                                        required: "City is required",
                                    })}></input>

    </div>
    <div class="form-group col-md-4">
      <label for="inputState">STATE</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">ZIP</label>
      <input type="text" class="form-control" id="inputZip"></input>
    </div>
  </div>




                <input type="checkbox" name="hideContactInfo" className="form-control checkbox" text="Hide contact information on my profile"></input>
                
                
            </div>
        </div>


      
  </div>
  </form>
</div>

        </Layout>
    );
}
