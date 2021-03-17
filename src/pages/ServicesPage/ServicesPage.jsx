import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import LanguageIcon from '@material-ui/icons/Language';
// React icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import favicon4 from "assets/img/favicon4.jpg";
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import ComputerIcon from '@material-ui/icons/Computer';

import hardware1 from "assets/img/hardware1.jpg";
import hardware3 from "assets/img/hardware3.jpg";
import hardware4 from "assets/img/hardware4.jpg";

import networks1  from "assets/img/networks1.jpg";
import networks2  from "assets/img/networks2.jpg";
import networks6  from "assets/img/networks6.jpg";
import networks5  from "assets/img/networks5.jpg";
import networks7  from "assets/img/networks7.jpg";

import software5 from "assets/img/software5.jpg";

import websites1 from "assets/img/websites1.jpg";
import websites2 from "assets/img/websites2.jpg";
import websites3 from "assets/img/websites3.jpg";

import unifi1 from "assets/img/unifi1.png";
import monitor1 from "assets/img/monitor.jpg";
import phone from "assets/img/phone.jpg";
import tablet from "assets/img/tablet.jpg";
import computer from "assets/img/computer.jpg";


import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ServicesPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="CampOwl"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                   
                    <div className={classes.name}>
                      <h2 className={classes.title}>Our Services</h2>
                      <h3>Innovative Solutions for RV Resorts and Campground Management.</h3>
                      
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
               
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} lg={12} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Hardware",
                        tabIcon: SettingsInputAntennaIcon,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem>
                              <h3>Managed Hardware</h3>
                              <h4>Better Systems, Better Booking.</h4>
                              </GridItem>
                            
                            <GridItem xs={12} sm={12} md={4}>                            
                              <img
                                alt="..."
                                src={hardware1}
                                className={navImageClasses}
                              />
                            <h4>Workstations and Point of Sale</h4>
                              <img
                                alt="..."
                                src={hardware4}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={hardware3}
                                className={navImageClasses}
                              />
                            <h4> Tire of "hold on, my computers being slow?"</h4>
                              <img
                                alt="..."
                                src={computer}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem>
                              <Button  size="lg"color="primary">
                               Upgrade Today
                              </Button>
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Network",
                        tabIcon: ComputerIcon,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={networks2}
                                className={navImageClasses}
                              />
                              <h3>Networks/Wireless Mesh</h3>
                              <h5>Installations, Maintenaince, and Support</h5>
                              <img
                                alt="..."
                                src={unifi1}
                                className={navImageClasses}
                              />
                              
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={networks7}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={networks1}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem >
                              <Button size="lg" color="primary">
                                Details
                              </Button>
                            </GridItem>
                            
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Website",
                        tabIcon: LanguageIcon,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem>
                              <h3>Modern Web Technology</h3>
                              <h4>Convey your experience, the Guests are waiting.</h4>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={websites1}
                                className={navImageClasses}
                              />
                              <h3>Design, Engage, Book</h3>
                              <img
                                alt="..."
                                src={websites2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={websites3}
                                className={navImageClasses}
                              />
                              
                              <img
                                alt="..."
                                src={hardware3}
                                className={navImageClasses}
                              />
                            
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Software",
                        tabIcon: ImportantDevicesIcon,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem>
                              <h3>Intuitive Reservation Software</h3>
                              <h4>Coming this Year</h4>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              
                              <img
                                alt="..."
                                src={tablet}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={websites1}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={phone}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={software5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ServicesPage);
