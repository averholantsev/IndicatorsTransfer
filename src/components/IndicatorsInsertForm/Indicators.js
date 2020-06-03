import React from "react";

import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import { MONTHS_LIST } from "./Constants";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const Indicators = (props) => {
  const {
    electricityDay,
    electricityNight,
    coldWaterKitchen,
    coldWaterBathroom,
    hotWaterKitchen,
    hotWaterBathroom,
  } = props.indicators;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" className="headerMargin">
          Месяц и год
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl style={{ width: "100%" }}>
          <InputLabel>Месяц</InputLabel>
          <Select
            value={props.monthYear.month || 0}
            onChange={(event) => props.setStateMonthYear("month", event.target.value)}
          >
            {MONTHS_LIST.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl style={{ width: "100%" }}>
          <InputLabel>Год</InputLabel>
          <Select
            value={props.monthYear.year || 2020}
            onChange={(event) => props.setStateMonthYear("year", event.target.value)}
          >
            {props.getCurrentYear().map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" className="headerMargin">
          Электроэнергия
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <CurrencyTextField
          style={{ width: "100%" }}
          variant="standard"
          label="День"
          currencySymbol=""
          value={electricityDay.value}
          minimumValue="0"
          onChange={(event, value) =>
            props.updateIndicatorsInState("electricityDay", value)
          }
          error={!electricityDay.valid && electricityDay.touched}
          helperText={
            !electricityDay.valid && electricityDay.touched ? electricityDay.errorMessage : null
          }
        />
      </Grid>
      <Grid item xs={6}>
        <CurrencyTextField
          style={{ width: "100%" }}
          variant="standard"
          label="Ночь"
          currencySymbol=""
          value={electricityNight.value}
          minimumValue="0"
          onChange={(event, value) =>
            props.updateIndicatorsInState("electricityNight", value)
          }
          error={!electricityNight.valid && electricityNight.touched}
          helperText={
            !electricityNight.valid && electricityNight.touched ? electricityNight.errorMessage : null
          }
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" className="headerMargin">
          Кухня
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <CurrencyTextField
          style={{ width: "100%" }}
          variant="standard"
          label="Холодная вода"
          currencySymbol=""
          value={coldWaterKitchen.value}
          minimumValue="0"
          onChange={(event, value) =>
            props.updateIndicatorsInState("coldWaterKitchen", value)
          }
          error={!coldWaterKitchen.valid && coldWaterKitchen.touched}
          helperText={
            !coldWaterKitchen.valid && coldWaterKitchen.touched ? coldWaterKitchen.errorMessage : null
          }
        />
      </Grid>
      <Grid item xs={6}>
        <CurrencyTextField
          style={{ width: "100%" }}
          variant="standard"
          label="Горячая вода"
          currencySymbol=""
          value={hotWaterKitchen.value}
          minimumValue="0"
          onChange={(event, value) =>
            props.updateIndicatorsInState("hotWaterKitchen", value)
          }
          error={!hotWaterKitchen.valid && hotWaterKitchen.touched}
          helperText={
            !hotWaterKitchen.valid && hotWaterKitchen.touched ? hotWaterKitchen.errorMessage : null
          }
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" className="headerMargin">
          Ванная
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <CurrencyTextField
          style={{ width: "100%" }}
          variant="standard"
          label="Холодная вода"
          currencySymbol=""
          value={coldWaterBathroom.value}
          minimumValue="0"
          onChange={(event, value) =>
            props.updateIndicatorsInState("coldWaterBathroom", value)
          }
          error={!coldWaterBathroom.valid && coldWaterBathroom.touched}
          helperText={
            !coldWaterBathroom.valid && coldWaterBathroom.touched ? coldWaterBathroom.errorMessage : null
          }
        />
      </Grid>
      <Grid item xs={6}>
        <CurrencyTextField
          style={{ width: "100%" }}
          variant="standard"
          label="Горячая вода"
          currencySymbol=""
          value={hotWaterBathroom.value}
          minimumValue="0"
          onChange={(event, value) =>
            props.updateIndicatorsInState("hotWaterBathroom", value)
          }
          error={!hotWaterBathroom.valid && hotWaterBathroom.touched}
          helperText={
            !hotWaterBathroom.valid && hotWaterBathroom.touched ? hotWaterBathroom.errorMessage : null
          }
        />
      </Grid>

      <Grid item xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={props.indicatorsValid ? props.modalHandlerOpen : () => props.checkFormValidity()}
        >
          Отправить
        </Button>
      </Grid>
    </Grid>
  );
};

export default Indicators;
