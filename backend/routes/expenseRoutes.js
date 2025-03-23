import express from "express";
import { getExpenses, addExpense } from "../models/expenseModel.js";

const router = express.Router();

// Route to get all expenses
router.get("/", (req, res) => {
  res.json(getExpenses());
});

// Route to add an expense
router.post("/", (req, res) => {
  const { name, amount } = req.body;
  addExpense(name, amount);
  res.status(201).send("Expense added!");
});

export default router;
