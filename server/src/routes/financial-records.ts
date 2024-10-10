import express, { Request, Response } from "express";
import FinancialRecordModel from "../schema/financial-record";

const router = express.Router();

router.get("/getAllByUserID/:userId", async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.userId;
    const records = await FinancialRecordModel.find({ userId: userId });
    if (records.length === 0) {
      res.status(404).json({ message: "No records found for the user." });
      return;  // Ensure no further code is executed after sending the response
    }
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ message: "Error fetching records", error: err });
  }
});

router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const newRecordBody = req.body;
    const newRecord = new FinancialRecordModel(newRecordBody);
    const savedRecord = await newRecord.save();

    res.status(201).json(savedRecord);
  } catch (err) {
    res.status(500).json({ message: "Error creating record", error: err });
  }
});

router.put("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const newRecordBody = req.body;
    const record = await FinancialRecordModel.findByIdAndUpdate(id, newRecordBody, { new: true });

    if (!record) {
      res.status(404).json({ message: "Record not found" });
      return;
    }

    res.status(200).json(record);
  } catch (err) {
    res.status(500).json({ message: "Error updating record", error: err });
  }
});

router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const record = await FinancialRecordModel.findByIdAndDelete(id);
    if (!record) {
      res.status(404).json({ message: "Record not found" });
      return;
    }
    res.status(200).json({ message: "Record deleted successfully", record });
  } catch (err) {
    res.status(500).json({ message: "Error deleting record", error: err });
  }
});

export default router;
