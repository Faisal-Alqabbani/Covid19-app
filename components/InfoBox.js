import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";
function InfoBox({ title, cases, total, active, isRed,...props }) {
  return (
    <Card className={`infoBox ${active && 'infobox--selected'} ${isRed && 'infobox--red'}`} onClick={props.onClick}>
      <CardContent>
        {/* title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>{cases}</h2>
        {/* +2001 Number of cases*/}
        {/* total 1.2M total! */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total!
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
