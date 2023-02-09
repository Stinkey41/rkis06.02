const jsonfile = require("jsonfile");

const getCarDB = () => {
  let data = jsonfile.readFileSync("./models/car.json", (err, obj) => {
    if (err) {
      console.error(err);
      throw err;
    }
  });
  return data;
};

const getCarOneDB = (id) => {
  let data = jsonfile.readFileSync("./models/car.json", (err, obj) => {
    if (err) {
      console.error(err);
      throw err;
    }
  });
  if (!id) throw "Нет нужного параметра";
  return data[id];
};

const updategetCarDB = (id) => {
  let data = jsonfile.readFileSync("./models/car.json", (error, file) => {
    if (error) {
      console.error(1, error);
      throw "1";
    }
  });

  let result = data(id);
  return result;
};

module.exports = { getCarDB, getCarOneDB };
