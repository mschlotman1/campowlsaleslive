/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps } from "@material-ui/icons";
import PhoneIcon from '@material-ui/icons/Phone';

// React icons
//import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
//import Favorite from "@material-ui/icons/Favorite";
//import HelpIcon from '@material-ui/icons/Help';
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Menu"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
              <Link to="/" className={classes.dropdownLink}>
                Home
                </Link>,
                <Link to="/services" className={classes.dropdownLink}>
                     Services
                </Link>,
                
            <Link to="/pricing" className={classes.dropdownLink}>
              Pricing
          </Link>,
       <Link to="/software-beta" className={classes.dropdownLink}>
       Beta Testing
     </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="Phone"
          title="Questions? Open 9-6 Daily"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
           <Button href="tel:480-415-6215"color="#034EA2" simple >
             <PhoneIcon/>      (480) 415-6215
                </Button>
        </Tooltip>
      </ListItem>
      
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
