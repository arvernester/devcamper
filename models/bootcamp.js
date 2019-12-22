const mongoose = require("mongoose");

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a bootcamp name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name cannot be more than 50 chararacters"]
  },
  slug: String,
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 250
  },
  website: {
    type: String
  },
  phone: {
    type: String,
    maxlength: 25
  },
  email: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: false
    },
    coordinates: {
      type: [Number],
      required: false,
      index: "2dsphere"
    }
  },
  address: String,
  city: String,
  zipcode: String,
  country: String,
  careers: {
    type: [String],
    required: false,
    default: ["NodeJS Development", "MongoDB", "Other"]
    // default: []
  },
  averageRating: {
    type: Number,
    min: 1,
    max: 10
  },
  averageCost: Number,
  photo: {
    type: String,
    default: "no-photo.jpg"
  },
  acceptGi: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Bootcamp", BootcampSchema);
