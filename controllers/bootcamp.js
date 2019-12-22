const Bootcamp = require("../models/bootcamp");

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps
    });
  } catch (error) {
    res.status(400).json({ status: false });
  }
};

exports.showBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(404).json({
        success: false
      });
    }

    res.status(200).json({
      status: true,
      data: bootcamp
    });
  } catch (error) {
    res.status(400).json({ status: false });
  }
};

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp
    });
  } catch (error) {
    res.status(400).json({
      success: false
    });
  }
};

exports.updateBootcamp = async (req, res, next) => {
  console.log(req.params.id);
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!bootcamp) {
    return res.status(400).json({
      success: false
    });
  }

  res.status(201).json({
    success: true,
    data: bootcamp
  });
};

exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(404);
    }

    res.status(204).json();
  } catch (error) {
    res.status(404);
  }
};
