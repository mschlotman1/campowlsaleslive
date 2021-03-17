/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
import { Link } from "gatsby"

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

import logo from "../../assets/img/favicon3.png";


function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link className={classes.block} to="/services">Services</Link>
           </ListItem>
             <ListItem className={classes.inlineBlock}>
                <Link className={classes.block} to="/about">About us </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link className={classes.block} to="/pricing">Pricing</Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link className={classes.block} to="/software-beta">Beta Testing </Link>
            </ListItem>
           
          </List>
        </div>
        <div className={classes.right}>
        &copy; {1900 + new Date().getYear()} &nbsp;<img width="5%"src={logo} alt="small campowl logo"></img> &nbsp;
          
    
          Stress Less. Manage More.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
