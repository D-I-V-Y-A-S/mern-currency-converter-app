import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ConverterComponent.css'
const ConverterComponent = () => {
    const [currency, setCurrency] = useState([])
    const [input, setInput] = useState({
        currencyValueToBeConverted: '',
        convertedCurrencyValue: '',
        concurrencyUnitToBeConverted: 'USD',
        convertedCurrencyUnit: 'INR'
    })

    const { currencyValueToBeConverted, concurrencyUnitToBeConverted, convertedCurrencyUnit, convertedCurrencyValue } = input

    useEffect(() => {
        axios.get('http://localhost:3500/api/v1/currency')
            .then(response => {
                const dataFromResponse = response.data
                setCurrency(dataFromResponse)
            })
            .catch(error => { alert(`Status : ${error.response.status} - ${error.response.message}`) })
    }, [])

    const convertCurrency = () => {
        axios.post(`http://localhost:3500/api/v1/currency/${concurrencyUnitToBeConverted}/${convertedCurrencyUnit}`, { currencyValueToBeConverted: currencyValueToBeConverted })

            .then(response => setInput({ ...input, convertedCurrencyValue: response.data.result.toFixed(6) }))
            .catch((error) => {
                console.log(error.response)
                alert(`Status : ${error.response.status} - ${error.response.message}`)
            })
    }

    useEffect(() => {
        if (currencyValueToBeConverted) {
            convertCurrency()
        }
    }, [convertedCurrencyUnit])

    return (
        <React.Fragment>
            <div className='box'>
                <div className='field'>
                    <b>From</b>
                    <select
                        className='select'
                        type="Number"
                        value={concurrencyUnitToBeConverted}
                        onChange={(event) => {
                            setInput({
                                ...input,
                                concurrencyUnitToBeConverted: event.target.value
                            })
                        }}
                    >
                        {currency && currency.map((item, index) => {
                            return <option key={index}>{item.code}</option>
                        })}
                    </select>

                    <input
                        className='input'
                        value={currencyValueToBeConverted}
                        placeholder='Enter currency value to be converted'
                        onChange={(event) => {
                            setInput({ ...input, currencyValueToBeConverted: event.target.value })
                        }}
                        type='number'
                    />
                </div>
                <div className='field'>
                    <b>To</b>
                    <select
                        className='select'
                        type="number"
                        value={convertedCurrencyUnit}
                        onChange={(event) => {
                            setInput({
                                ...input,
                                convertedCurrencyUnit: event.target.value
                            })
                        }}
                    >
                        {currency && currency.map((item, index) => {
                            return <option key={index}>{item.code}</option>
                        })}
                    </select>

                    <input
                        className='input'
                        value={convertedCurrencyValue}
                        placeholder='Converted currency value'
                        disabled
                        // onChange={(event) => {
                        //     setInput({ ...input, convertedCurrencyUnit: event.target.value })
                        // }}
                        type='number'
                    />
                </div>
                </div>
                <div className='button-container'>
                    <button type="button" onClick={convertCurrency}>Convert</button>
                </div>
        </React.Fragment>
    )
}

export default ConverterComponent


