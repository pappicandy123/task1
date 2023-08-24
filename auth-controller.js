const User = require("./models/user");
const bcrypt = require("bcrypt");

exports.logUerIn = async (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    const passwordIsValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!passwordIsValid) {
      res.status(401).json({ message: "Invalid password" });
    }
    res.status(200).json(existingUser);
  } else {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(200).json({ email: newUser.email });
  }
};
