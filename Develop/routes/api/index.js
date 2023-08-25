const router = require('express').Router();

const userRoutes = require('./api');
const thoughtRoutes = require('./api');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use((req, res) => res.send('Wrong Route!'));

module.exports = router;