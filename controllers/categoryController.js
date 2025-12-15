import Category from "../models/Category.js";

export const createcategory = async (req, res) => {
  try {
    const { name, icon, color } = req.body;
    if (!name)
      return res.status(400).json({ message: "Category name required" });

    const category = await Category.create({
      userId: req.user._id,
      name,
      icon,
      color,
    });

    res.status(201).json({ message: "Category Created", category });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Category already exists" });
    }
    res.status(500).json({ message: "Server error", error });
  }
};

export const getCategory = async (req, res) => {
  try {
    const categories = await Category.find({ userId: req.user._id }).sort({
      createdAt: 1,
    });

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Server error", data: error });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { name, icon, color } = req.body;
    const category = await Category.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    if (name) category.name = name;
    if (icon) category.icon = icon;
    if (color) category.color = color;

    await category.save();

    res.status(200).json({
      message: "Category updated successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!category)
      return res.status(404).json({ message: "Category not found" });

    await category.deleteOne();
    res.status(200).json({ message: "Category Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", data: error });
  }
};
