const express = require('express');
const router = express.Router();
const multer = require('multer');
const Event = require('../models/Event');
const { protect, verifyType } = require('../middlewares/auth.middleware');
const upload = multer({ dest: "images" })

// @url/events/
router.get('/get', async (_req, res) => {
    const events = await Event.find()
    res.json(events)
})

router.post('/add', protect, verifyType('event-manager'), upload.single('image'), async (req, res) => {
    try {
        const { body: { event_title, event_description, event_date }, file: { filename } } = req
        const event = await Event.create({ event_title, event_description, image: filename, event_date })
        res.json(event)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Some Error Occured' })
    }
})

router.put('/update/:id', protect, verifyType('event-manager'), async (req, res) => {
    try {
        const { event_title, event_description, image, event_date } = req.body
        const event = await Event.findById(req.params.id)
        if (!event) return res.status(404).json({ error: "Event not found!" })
        const newEvent = await Event.findByIdAndUpdate(req.params.id, { $set: { event_title, event_description, image, event_date } }, { new: true })
        res.json(newEvent)
    } catch {
        res.status(500).json({ error: 'Some Error Occured' })
    }
})

router.delete('/delete/:id', protect, verifyType('event-manager'), async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
        if (!event) return res.status(404).json({ error: "Event not found!" })
        await Event.findByIdAndDelete(req.params.id)
        res.json({ success: true })
    } catch {
        res.status(500).json({ error: 'Some Error Occured' })
    }
})

module.exports = router;