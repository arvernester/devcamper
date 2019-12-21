exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.user,
    data: []
  });
};

exports.showBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: {
      id: req.params.id
    }
  });
};

exports.createBootcamp = (req, res, next) => {
  res.status(201).json({
    success: true,
    data: {}
  });
};

exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: {
      id: req.params.id
    }
  });
};

exports.deleteBootcamp = (req, res, next) => {
  res.sendStatus(204);
};
