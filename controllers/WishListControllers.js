/** @module WishListControllers */

const WishListModel = require("../models/WishListModel");

const controllerType = "Wish List Item";

module.exports.getWishList = async (request, response) => {
  const wishes = await WishListModel.find();
  const message = `${wishes.length} ${controllerType}${
    wishes.length === 1 ? "" : "s"
  } Loaded Successfully`;
  response.send({data: wishes, message});
};

module.exports.saveWishItem = (request, response) => {
  console.log("request", request.body)
  WishListModel.create(request.body)
    .then(data => {
      const message = `${controllerType} Saved Successfully`;
      console.log(message);
      response.status(201).send({
        message,
        data
      });
    })
    .catch(error => {
      console.error(error);
      response.send({ error: error, message: "Something went wrong!" });
    });
};

module.exports.updateWishItem = (request, response) => {
  const { id } = request.params;

  WishListModel.findByIdAndUpdate(id, request.body)
    .then(data => {
      const message = `${controllerType} Updated Successfully`;
      console.log(message);
      response.status(201).send({
        message,
        data
      });
    })
    .catch(error => {
      console.error(error);
      response.send({ error: error, message: "Something went wrong!" });
    });
};

module.exports.deleteWishItem = (request, response) => {
  const { id } = request.params;

  WishListModel.findByIdAndDelete(id)
    .then(data => {
      const message = `${controllerType} Deleted Successfully`;
      console.log(message);
      response.status(201).send({
        message,
        data
      });
    })
    .catch(error => {
      console.error(error);
      response.send({ error: error, message: "Something went wrong!" });
    });
};
