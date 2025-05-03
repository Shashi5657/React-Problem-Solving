import User from "../models/userModel.js";

export const createUser = async (req, res) => {
  const { name, email, dob } = req.body;
  if (!name || !email || !dob) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  try {
    const user = new User({
      name,
      email,
      dob: new Date(dob), // Ensure dob is stored as a Date object
    });
    await user.save();
    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    return res.status(200).json({ message: "success", users: allUsers });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await User.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
