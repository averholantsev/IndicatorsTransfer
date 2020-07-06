import React from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import NumberTextField from "../UI/NumberTextField/NumberTextField";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Text from "../UI/Text/Text";

const useStyles = makeStyles({
  field: {
    width: "100%",
  },
  buttonPosition: {
    textAlign: "center",
  },
});

const UserCard = (props) => {
  const classes = useStyles();
  const {
    firstName,
    lastName,
    userEmail,
    accountantEmail,
    address,
  } = props.userDetails;

  const {
    prevIndicatorsDate,
    electricityDay,
    electricityNight,
    kitchenColdWater,
    kitchenHotWater,
    bathroomColdWater,
    bathroomHotWater,
  } = props.prevIndicators;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          <Text tid="contacts" />
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label={<Text tid="firstName" />}
          value={firstName.value}
          fullWidth
          onChange={(event) =>
            props.updateUserDataInState("firstName", event.target.value)
          }
          error={!firstName.valid && firstName.touched}
          helperText={
            !firstName.valid && firstName.touched ? (
              <Text tid={firstName.errorMessage} />
            ) : null
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label={<Text tid="lastName" />}
          value={lastName.value}
          fullWidth
          onChange={(event) =>
            props.updateUserDataInState("lastName", event.target.value)
          }
          error={!lastName.valid && lastName.touched}
          helperText={
            !lastName.valid && lastName.touched ? (
              <Text tid={lastName.errorMessage} />
            ) : null
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label={<Text tid="address" />}
          value={address.value}
          fullWidth
          onChange={(event) =>
            props.updateUserDataInState("address", event.target.value)
          }
          error={!address.valid && address.touched}
          helperText={
            !address.valid && address.touched ? (
              <Text tid={address.errorMessage} />
            ) : null
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label={<Text tid="userEmail" />}
          value={userEmail.value}
          disabled
          fullWidth
          onChange={(event) =>
            props.updateUserDataInState("userEmail", event.target.value)
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label={<Text tid="accountantEmail" />}
          value={accountantEmail.value}
          fullWidth
          onChange={(event) =>
            props.updateUserDataInState("accountantEmail", event.target.value)
          }
          error={!accountantEmail.valid && accountantEmail.touched}
          helperText={
            !accountantEmail.valid && accountantEmail.touched ? (
              <Text tid={accountantEmail.errorMessage} />
            ) : null
          }
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          <Text tid="primaryIndicators" />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            clearable
            className={classes.field}
            disabled={props.isDisabled}
            label={<Text tid="prevIndicatorsDate" />}
            format="dd.MM.yyyy"
            value={prevIndicatorsDate.value}
            onChange={(date) =>
              props.updatePrevIndicatorsInState("prevIndicatorsDate", date)
            }
            error={!prevIndicatorsDate.valid && prevIndicatorsDate.touched}
            helperText={
              !prevIndicatorsDate.valid && prevIndicatorsDate.touched ? (
                <Text tid={prevIndicatorsDate.errorMessage} />
              ) : null
            }
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={6}>
        <NumberTextField
          label={<Text tid="electricityDay" />}
          value={electricityDay.value}
          onChange={(event) =>
            props.updatePrevIndicatorsInState(
              "electricityDay",
              event.target.value
            )
          }
          error={!electricityDay.valid && electricityDay.touched}
          helperText={
            !electricityDay.valid && electricityDay.touched ? (
              <Text tid={electricityDay.errorMessage} />
            ) : null
          }
        />
      </Grid>
      <Grid item xs={6}>
        <NumberTextField
          label={<Text tid="electricityNight" />}
          value={electricityNight.value}
          onChange={(event) =>
            props.updatePrevIndicatorsInState(
              "electricityNight",
              event.target.value
            )
          }
          error={!electricityNight.valid && electricityNight.touched}
          helperText={
            !electricityNight.valid && electricityNight.touched ? (
              <Text tid={electricityNight.errorMessage} />
            ) : null
          }
        />
      </Grid>
      <Grid item xs={6}>
        <NumberTextField
          label={<Text tid="kitchenColdWater" />}
          value={kitchenColdWater.value}
          onChange={(event) =>
            props.updatePrevIndicatorsInState(
              "kitchenColdWater",
              event.target.value
            )
          }
          error={!kitchenColdWater.valid && kitchenColdWater.touched}
          helperText={
            !kitchenColdWater.valid && kitchenColdWater.touched ? (
              <Text tid={kitchenColdWater.errorMessage} />
            ) : null
          }
        />
      </Grid>
      <Grid item xs={6}>
        <NumberTextField
          label={<Text tid="kitchenHotWater" />}
          value={kitchenHotWater.value}
          onChange={(event) =>
            props.updatePrevIndicatorsInState(
              "kitchenHotWater",
              event.target.value
            )
          }
          error={!kitchenHotWater.valid && kitchenHotWater.touched}
          helperText={
            !kitchenHotWater.valid && kitchenHotWater.touched ? (
              <Text tid={kitchenHotWater.errorMessage} />
            ) : null
          }
        />
      </Grid>
      <Grid item xs={6}>
        <NumberTextField
          label={<Text tid="bathroomColdWater" />}
          value={bathroomColdWater.value}
          onChange={(event) =>
            props.updatePrevIndicatorsInState(
              "bathroomColdWater",
              event.target.value
            )
          }
          error={!bathroomColdWater.valid && bathroomColdWater.touched}
          helperText={
            !bathroomColdWater.valid && bathroomColdWater.touched ? (
              <Text tid={bathroomColdWater.errorMessage} />
            ) : null
          }
        />
      </Grid>
      <Grid item xs={6}>
        <NumberTextField
          label={<Text tid="bathroomHotWater" />}
          value={bathroomHotWater.value}
          onChange={(event) =>
            props.updatePrevIndicatorsInState(
              "bathroomHotWater",
              event.target.value
            )
          }
          error={!bathroomHotWater.valid && bathroomHotWater.touched}
          helperText={
            !bathroomHotWater.valid && bathroomHotWater.touched ? (
              <Text tid={bathroomHotWater.errorMessage} />
            ) : null
          }
        />
      </Grid>
      <Grid className={classes.buttonPosition} item xs={12}>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={() => {
            if (props.checkFormValidity()) props.updateUserDetails();
          }}
        >
          <Text tid="save" />
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserCard;
