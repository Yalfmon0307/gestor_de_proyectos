import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("home");
});

router.post("/login", (req, res) => {
    res.send("login");
});

router.post("/register", (req, res) => {
    res.send("register");
});

export default router;