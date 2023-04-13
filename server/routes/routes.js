const router = require('express').Router();
const { signupPost } = require('../controllers/User');


router.route('/signup').post(signupPost)

router.route('/health').get((req, res) =>{
    res.status(200).json({
        'success': true,
        'message': 'Hello world'
    })
})



module.exports = router;