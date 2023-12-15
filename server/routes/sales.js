import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'sales API is working!',
  })
});

export default router; 