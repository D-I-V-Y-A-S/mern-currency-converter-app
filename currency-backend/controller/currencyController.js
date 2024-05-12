const currencyModel = require('../Model/CurrencyModel')
const Data = require('../Data/initialData')

const getAllConversionRate = async (request, response) => {
  try {
    const currencyData = await currencyModel.find()
    if (currencyData.length === 0) {
      const currencyData = await currencyModel.insertMany(Data)
    }
    response.status(200).json(currencyData)
  }
  catch (error) {
    response.status(500).json({ message: error.message })
  }
}

const convertCurrency = async (request, response) => {
  const { from, to } = request.params
  const { currencyValueToBeConverted } = request.body

  try {
    const fromRate = await currencyModel.findOne({ code: from })
    const toRate = await currencyModel.findOne({ code: to })

    const result = (toRate.value / fromRate.value) * currencyValueToBeConverted
    response.status(200).json({ result })
  }

  catch (error) {
    response.status(500).json({ message: error.message })
  }
}

module.exports = { convertCurrency, getAllConversionRate }