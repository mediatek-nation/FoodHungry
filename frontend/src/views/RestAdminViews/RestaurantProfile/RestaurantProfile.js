import React, { useEffect, useState } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/RestAdminComponents/Grid/GridItem.js";
import GridContainer from "components/RestAdminComponents/Grid/GridContainer.js";
import CustomInput from "components/RestAdminComponents/CustomInput/CustomInput.js";
import Button from "components/RestAdminComponents/CustomButtons/Button.js";
import Card from "components/RestAdminComponents/Card/Card.js";
import CardHeader from "components/RestAdminComponents/Card/CardHeader.js";
import CardAvatar from "components/RestAdminComponents/Card/CardAvatar.js";
import CardBody from "components/RestAdminComponents/Card/CardBody.js";
import CardFooter from "components/RestAdminComponents/Card/CardFooter.js";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const [profile, setProfile] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [mobno, setMobno] = useState();
  const [address, setAddress] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    axios
      .get("/api/auth/restadmin/current")
      .then(res => {
        setProfile(res.data);
        setEmail(res.data.email);
        setName(res.data.name);
        setMobno(res.data.mobno);
        setAddress(res.data.address);
        setImage(res.data.image);
      })
      .catch(err => console.log(err));
  }, []);

  const updateProfile = e => {
    e.preventDefault();
    const adminData = {
      email,
      name,
      mobno,
      address
    };

    axios
      .post("/api/userprofile/restadmin/update-profile", adminData)
      .then(res => {
        setProfile(res.data);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  const deleteProfile = e => {};

  const handleChangeImage = e => {
    const fd = new FormData();
    fd.append("image", e.target.files[0], e.target.files[0].name);
    axios
      .post("/api/userprofile/restadmin/update-profile-picture", fd, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data; boundary=${fd._boundary}`
        }
      })
      .then(res => {
        setProfile(res.data);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    inputProps={{
                      value: email !== undefined ? email : "",
                      onChange: e => setEmail(e.target.value)
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Restaurant Name"
                    id="first-name"
                    inputProps={{
                      value: name !== undefined ? name : "",
                      onChange: e => setName(e.target.value)
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Mobile Number"
                    id="mobno"
                    inputProps={{
                      type: "number",
                      value: mobno !== undefined ? mobno : "",
                      onChange: e => setMobno(e.target.value)
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    id="about-me"
                    labelText="address"
                    inputProps={{
                      value: address !== undefined ? address : "",
                      onChange: e => setAddress(e.target.value)
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={updateProfile}>
                Update Profile
              </Button>
              <Button color="primary" onClick={deleteProfile}>
                Delete Profile
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <input
              accept="image/*"
              id="text-button-file"
              multiple
              type="file"
              onChange={handleChangeImage}
              hidden
            />
            <label htmlFor="text-button-file">
              <CardAvatar profile>
                <img src={image} alt="..." height={400} width={400} />
                <Button href="" component="span" color="white"></Button>
              </CardAvatar>
            </label>
            <CardBody profile>
              <h6 className={classes.cardCategory}>
                {profile !== undefined ? profile.email : ""}
              </h6>
              <h4 className={classes.cardTitle}>
                {profile !== undefined ? profile.name : ""}
              </h4>
              <p className={classes.description}>
                Restaurant Main Branch Address
                <br />
                {profile !== undefined ? profile.address : ""}
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
