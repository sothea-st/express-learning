import { Router } from "express";
 
const router = Router();

router.get('/homes', (req, res) => {
    res.send("dddd");
  });

export default router;
