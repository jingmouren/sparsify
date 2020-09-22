import React from "react";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

import makeStyles from "./display-metric-styles";

const useStyles = makeStyles();

function DisplayMetric({
  title,
  size,
  wrap,
  rootClass,
  titleClass,
  metricClass,
  children,
}) {
  const classes = useStyles();

  if (!size) {
    size = "medium";
  }

  let titleVariant = "subtitle2";
  let metricVariant = null;

  if (size === "small") {
    metricVariant = "body1";
  } else if (size === "medium") {
    metricVariant = "h6";
  } else if (size === "large") {
    metricVariant = "h4";
  }

  return (
    <div className={`${rootClass} ${classes.root}`}>
      <Typography
        color="textSecondary"
        className={`${titleClass} ${classes.title}`}
        variant={titleVariant}
      >
        {title}
      </Typography>
      <Typography
        color="textPrimary"
        className={`${metricClass} ${classes.metric} ${
          size === "large" ? classes.metricLarge : ""
        }`}
        variant={metricVariant}
        noWrap={!wrap}
      >
        {children}
      </Typography>
    </div>
  );
}

DisplayMetric.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  noWrap: PropTypes.bool,
  rootClass: PropTypes.string,
  titleClass: PropTypes.string,
  metricClass: PropTypes.string,
  children: PropTypes.node,
};

export default DisplayMetric;
