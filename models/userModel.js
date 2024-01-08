const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,

    }, father: {
      type: String,
    },
    mother: {
      type: String,
    },
    paddress: {
      type: String,
    },
    parent: {
      type: String,
    },
    education: {
      type: String,
    },
    id: {
      type: String,
    },
    image: {
    url: String,
    public_id: String,
  },
    imagePublicId: {
      type: String,
    },
   
    role: {
      type: String,
      default: "gust",
    },
    userDetails: [{ type: Schema.Types.ObjectId, ref: 'StudentDetails' }],
  },
  { timestamps: true }
);
module.exports = mongoose.model('User', userSchema);

