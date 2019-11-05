import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/RestAdminComponents/Grid/GridItem.js";
import GridContainer from "components/RestAdminComponents/Grid/GridContainer.js";
import Table from "components/RestAdminComponents/Table/Table.js";
import Card from "components/RestAdminComponents/Card/Card.js";
import CardHeader from "components/RestAdminComponents/Card/CardHeader.js";
import CardBody from "components/RestAdminComponents/Card/CardBody.js";
import CustomInput from "components/RestAdminComponents/CustomInput/CustomInput";
import Button from "components/RestAdminComponents/CustomButtons/Button.js";
import CardFooter from "components/RestAdminComponents/Card/CardFooter";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>Add Foods</h4>
            <p className={classes.cardCategoryWhite}>Add Foods to your store</p>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Food Name"
                  id="food-name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Food Category"
                  id="food-category"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Price"
                  id="food-price"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter>
            <Button color="primary">Add Food</Button>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Food Store</h4>
            <p className={classes.cardCategoryWhite}>
              Here is the details of Foods
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Category", "Price", "Rating"]}
              tableData={[
                ["Zeera Rice", "Rice", "80.00", "4"],
                ["Fried Rice", "Rice", "100.00", "5"],
                ["Plain Rice", "Rice", "40.00", "5"],
                ["Tandoori", "Rooti", "10.00", "5"],
                ["Chicken Biriyani", "Biriyani", "100.00", "5"],
                ["Mutton Biriyani", "Biriyani", "120.00", "5"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
