const express = require('express');
const router = express.Router();


router.get('/admin', async (req, res) => {
try{
    const locals = {
        title: "Admin",
        description: "TheFoodieLeonneAdmin"
    }

    res.render('admin/index', {locals, data});
} catch(error) {
    console.log(error);
}
})





module.exports = router;