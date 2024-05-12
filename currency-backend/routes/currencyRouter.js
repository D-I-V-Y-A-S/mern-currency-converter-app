const express = require("express")
const router = express.Router()

const { convertCurrency,getAllConversionRate } = require ("../controller/currencyController")

router.route('/').get(getAllConversionRate)
router.route('/:from/:to').post(convertCurrency)

module.exports = router




//"    /:id" -> request.params
//"    ,{data:data}" -> request.body
//"    ?${ISBN:bookInfo.ISBN}" ->request.query