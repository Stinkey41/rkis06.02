const { Router } = require("express");
const { getCar, PostCar, deleteCar, updateCar } = require("../controller/car.controller");
const router = Router();

router
  .route("/")
  .get(getCar)
  .post(PostCar)
  .delete(deleteCar)
//   .update(updateCar)

module.exports = router;

