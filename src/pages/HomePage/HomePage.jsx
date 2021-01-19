import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import Badge from "components/Badge/Badge.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import ProductSection from "../HomePage/Sections/ProductSection.jsx";

class HomePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand = "CampOwl"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg200.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}> Stress Less. Manage More.</h1>
                  
                  <h3 className={classes.subtitle}>
                    Business Solutions Made Easy
                  </h3>
                  <Badge color="primary">Managed Technology Provider for RV Parks, Resorts, and Campgrounds </Badge>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <ProductSection />
       
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(HomePage);
