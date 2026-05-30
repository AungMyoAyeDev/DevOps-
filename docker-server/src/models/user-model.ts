import mongoose, { model } from "mongoose";

const userSchema = mongoose.Schema.create(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },

  { timestamps: true },
);

const Users = model("Users", userSchema);
export default Users;
