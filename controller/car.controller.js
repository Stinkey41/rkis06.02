getCar = (req, res) => {
  res.status(200).json("Получаем машину");
};
PostCar = (req, res) => {
  res.status(200).json("Создали");
};
updateCar = (req, res) => {
  res.status(200).json("Обновили");
};
deleteCar = (req, res) => {
  res.status(200).json("Удалили");
};
getCarone = (req, res) => {
    res.status(200).json("добавить машину")
}


module.exports = {
  getCar,
  deleteCar,
  updateCar,
  PostCar,
  getCarone,
};
