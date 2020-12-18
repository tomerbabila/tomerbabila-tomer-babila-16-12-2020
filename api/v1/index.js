const { Router } = require('express');
const router = Router();

router.use('/items', require('./items'));
router.use('/receivedItems', require('./receivedItems'));

module.exports = router;
