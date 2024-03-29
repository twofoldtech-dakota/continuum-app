import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/shared/layout";
import useSWR from "swr";
import { RiCreativeCommonsZeroLine } from "react-icons/ri";
export default function Profile() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  
  const [errorMessage, setErrorMessage] = useState("");

  const { handleSubmit, register, errors } = useForm();
  const { data: userData, userError } = useSWR( "/api/user", fetcher );
  const [updatedFormData, setUpdatedFormData] = useState(null);

  useEffect(() => {
    if(userData){
      setUpdatedFormData(userData);
    }
  
}, [userData]);

  const updateUser = () => {
    fetch("api/profilesettings/" + userData.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: updatedFormData ? updatedFormData.username : userData.username, // Use your own property name / key
        email: updatedFormData ? updatedFormData.email : updatedFormData.email
      }),
    })
      .then((res) => res.json())
      .then(console.log("form updated"))
      .catch((err) => console.log(err.message))
  }
  const onSubmit = handleSubmit(async (formData) => {
    if (errorMessage) setErrorMessage("");
    
    try {
      if(formData != null){

      
      console.log("form Data - ");
      console.log(formData);
      setUpdatedFormData(formData);
      updateUser();
    }
    }
    catch(error){
      console.log("error on submit");
      console.error(error);
      setErrorMessage(error.message);
    }
  });

  const handleChange = function (e) {
    this.setState({ selectValue: e.target.value });
  };
  
  return (
    <Layout title="Continuum - Profile">
      
      <div className="profile-edit">
        <form onSubmit={onSubmit}>
          <div className="title">
            <h3 className="col-md-5">Public Profile</h3>
            <div className="col-md-7">

              
              <input
                                type="submit"
                                className="btn-default"
                                defaultValue="Save Changes"
                            />
              <a className="btn-default inverse" href="/public#">
                View Profile
              </a>

            </div>
          </div>
          <div className="profile-edit-container">
            {errorMessage && <p role="alert">{errorMessage}</p>}
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12 profile-col">
                  <div className="form-section">
                    <div className="form-group">
                      <div className="group-title">PROFILE BASICS</div>
                      <div className="form-label">USERNAME</div>
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="http://getcontinuum.app/"
                        defaultValue={userData?.username}
                        ref={register({
                          required: "Username is required",
                        })}
                      />
                      {errors.username && (
                                <span role="alert" class="form-error">
                                    {errors.username.message}
                                </span>
                            )}

                      <div className="form-subtext">
                        Your username is your unique identifier across the
                        network.
                      </div>

                      <div className="form-label">NAME</div>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        defaultValue={userData?.name}
                        ref={register({
                          required: "Name is required",
                        })}
                      />
                      {errors.name && (
                                <span role="alert" class="form-error">
                                    {errors.name.message}
                                </span>
                            )}

                      <div className="form-subtext">
                        Help people discover your account by using the name
                        you’re known by: either your full name, nickname, or
                        business name.
                      </div>

                      <div className="form-label">TITLE</div>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        defaultValue={userData?.title}
                        ref={register({
                          required: "Title is required",
                        })}
                      />
                      {errors.title && (
                                <span role="alert" class="form-error">
                                    {errors.title.message}
                                </span>
                            )}

                      <div className="form-label">COMPANY</div>
                      <input
                        type="text"
                        name="company"
                        className="form-control"

                        defaultValue={userData?.company}
                        ref={register({
                          required: "Company is required",
                        })}
                      />
                        {errors.company && (
                                <span role="alert" class="form-error">
                                    {errors.company.message}
                                </span>
                            )}

                      <div className="form-label">WEBSITE</div>
                      <input
                        type="text"
                        name="website"
                        className="form-control"

                        defaultValue={userData?.website}
                        ref={register({
                          required: "Website is required",
                        })}
                     />
                          {errors.website && (
                                <span role="alert" class="form-error">
                                    {errors.website.message}
                                </span>
                            )}

                      <div className="form-label">BIO</div>

                      <p className="character-count col-sm-2">30/400</p>
                      <textarea
                        name="bio"
                        className="form-control bio"
                        maxLength="400"
                        defaultValue={userData?.bio}
                      ></textarea>
                    </div>
                  </div>

                  <div className="form-section">
                    <div className="form-group">
                      <div className="group-title">PERSONAL INFORMATION</div>
                      <div className="form-label">EMAIL ADDRESS</div>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        defaultValue={userData?.email}
                        ref={register({
                          required: "Email is required",
                        })}
                      />
                      {errors.email && (
                                <span role="alert" class="form-error">
                                    {errors.email.message}
                                </span>
                            )}

                      <div className="form-label">WORK/MOBILE PHONE</div>
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        defaultValue={userData?.phone}
                        ref={register({
                          required: "Phone number is required",
                        })}
                      />
                        {errors.phone && (
                                <span role="alert" class="form-error">
                                    {errors.phone.message}
                                </span>
                            )}

                      <div className="form-label">OFFICE PHONE</div>
                      <input
                        type="text"
                        name="officePhone"
                        className="form-control"
                        defaultValue={userData?.officePhone}
                        ref={register({
                          required: "Title is required",
                        })}
                      />
                        {errors.officePhone && (
                                <span role="alert" class="form-error">
                                    {errors.officePhone.message}
                                </span>
                            )}    

                      <div className="form-label">MAILING ADDRESS</div>
                      <input
                        type="text"
                        name="addressLine1"
                        className="form-control"

                        defaultValue={userData?.addressLine1}
                        ref={register({
                          required: "Address is required",
                        })}
                      />
                      {errors.addressLine1 && (
                                <span role="alert" class="form-error">
                                    {errors.addressLine1.message}
                                </span>
                            )}

                      <input
                        type="text"
                        name="addressLine2"
                        className="form-control"
                        defaultValue={userData?.addressLine2}
                      ></input>

                      <div className="form-row">
                        <div className="form-group col-md-5">
                          <label className="form-label">CITY</label>
                          <input
                            type="text"
                            name="city"
                            className="form-control"
                            defaultValue={userData?.city}
                            ref={register({
                              required: "City is required",
                            })}
                          />
                          {errors.city && (
                                <span role="alert" class="form-error">
                                    {errors.city.message}
                                </span>
                            )}
                        </div>
                        <div className="form-group col-md-3">
                          <label className="form-label">STATE</label>
                          <select
                            className="form-control"
                            name="state"
                            defaultValue={userData?.state}
                            ref={register({
                              required: "State is required zip",
                            })}
                          >
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
                          {errors.state && (
                                <span role="alert" class="form-error">
                                    {errors.state.message}
                                </span>
                            )}
                        </div>
                        <div className="form-group col-md-4">
                          <label className="form-label">ZIP</label>
                          <input
                            type="text"
                            name="zip"
                            className="form-control"
                            defaultValue={userData?.zip}
                            ref={register({
                              required: "Zip is required zip",
                            })}
                          />
                          {errors.zip && (
                                <span role="alert" class="form-error">
                                    {errors.zip.message}
                                </span>
                            )}
                        </div>
                      </div>

                      <input
                        type="checkbox"
                        name="hideContactInfo"
                        className="form-control checkbox"
                        defaultValue={userData?.hideContactInfo}
                        defaultChecked={userData?.hideContactInfo}
                      ></input>
                      <label className="form-label-checkbox">
                        Hide contact information on my profile
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12 profile-col">
                  <div className="form-section">
                    <div className="form-group">
                      <div className="group-title">PROFILE PHOTO</div>
                      <div className="profile-image col-sm-6"></div>

                      <div className="col-sm-6">
                        <a href="#" className="profile-change-photo">
                          Change Photo
                        </a>
                        <div className="form-subtext">
                          For best results, your photo should be at least
                          400x400 pixels and a max of 2MB. Only PNG, JPG, and
                          GIF formats accepted.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-section">
                    <div className="form-group">
                      <div className="group-title">SOCIAL MEDIA LINKS</div>
                      <div className="form-label">LINKEDIN</div>
                      <input
                        type="text"
                        name="linkedin"
                        className="form-control"
                        defaultValue={userData?.linkedin}
                      ></input>
                      <div className="form-label">ZILLOW</div>
                      <input
                        type="text"
                        name="zillow"
                        className="form-control"
                        defaultValue={userData?.zillow}
                      ></input>
                      <div className="form-label">TWITTER</div>
                      <input
                        type="text"
                        name="twitter"
                        className="form-control"
                        defaultValue={userData?.twitter}
                      ></input>
                      <div className="form-label">INSTAGRAM</div>
                      <input
                        type="text"
                        name="instagram"
                        className="form-control"
                        defaultValue={userData?.instagram}
                      ></input>
                      <div className="form-label">FACEBOOK</div>
                      <input
                        type="text"
                        name="facebook"
                        className="form-control"
                        defaultValue={userData?.facebook}
                      ></input>
                    </div>
                  </div>

                  <div className="form-section">
                    <div className="form-group">
                      <div className="group-title">THEME COLOR</div>
                      <div className="profile-theme purple"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    
   
    </Layout>
    );
    
}
