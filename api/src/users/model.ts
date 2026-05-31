import { model, Schema } from "mongoose";

const userschema = new Schema(
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

const Users = model("Users", userschema);
export default Users;
