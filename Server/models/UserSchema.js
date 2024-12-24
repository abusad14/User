const { model, Schema } = require("mongoose");
// const bcrypt = require("bcrypt"); //*hashing the password
const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: [true, "email is missing"], unique: true },
    password: {
      type: String,
      required: [true, "password is short or missing"],
      minlength: 6,
      select: false,
    },
  },
  { timestamps: true }
);

// !Hashing the password
// userSchema.pre("save", async function () {
//   let salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });
module.exports = model("User", userSchema);
