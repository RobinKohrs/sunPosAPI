let express = require("express");
let SunCalc = require("suncalc");
let bodyParser = require("body-parser");

const APP = express();
APP.use(bodyParser.urlencoded({ extended: false }));
APP.use(bodyParser.json());

APP.listen(process.env.PORT || 3000, () => {
  console.log(`server is running`);
});

APP.get("/sunpos", (req, res) => {
  let lat = req.query.lat;
  let lon = req.query.lon;
  let date = req.query.date;

  date = new Date(date);

  let pos = SunCalc.getPosition(
    /*Date*/ date,
    /*Number*/ +lat,
    /*Number*/ +lon
  );

  res.json(pos);
});

module.exports = APP;
