import { useEffect } from 'react'
import './customCheckBox.css'

const CustomCheckBox = ({options, changePrice, changeOptions}) => {
    
    const optionList = Object.keys(options)

    useEffect(()=>{
        optionList.map((option)=> {
            const group = document.getElementsByName(option)
            group[0].checked = true
        })
    }, [])
    
    const handleOnChange = (event, optionType, optionValue) => {
        const group = document.getElementsByName(optionType);
        for(let item of group) {
            item.checked = false
        }
        event.currentTarget.checked = true;

        changeOptions(optionType, optionValue)

        if(optionType !== "Color") {
            const extraCost = parseInt(event.currentTarget.value);
            changePrice(extraCost);
        }
    }

    return (
        optionList.map((option) => {
            return (
                <div className="options">
                    <h3>{option}</h3>
                    <div className="option">
                        {
                            options[option].map((opt) => {
                                // console.log('option', option)
                                // console.log('options[option]', options[option])
                                // console.log('opt', opt)
                                // console.log('optKeys', Object.keys(opt))
                                return (
                                    <label className="option-box">
                                        <input 
                                            type="checkbox" 
                                            class="checkbox" 
                                            name={option}
                                            value={option==="Color" ? Object.keys(opt) : opt[Object.keys(opt)]}
                                            onChange={(e)=> handleOnChange(e, option, Object.keys(opt))}
                                        />
                                        <span className="checkmark"></span>
                                        {
                                            option==="Color" 
                                            ? <span className="option-value" style={{background: `${opt[Object.keys(opt)]}`, backgroundClip: 'content-box'}}></span> 
                                            : <span className="option-value">{Object.keys(opt)}</span>
                                        }
                                    </label>
                                // (/^#[0-9a-fA-F]{3,6}/).test(opt) ? <span style={{background: `${opt}`, backgroundClip: 'content-box'}}></span> : <span>{opt}</span>
                                )
                            })
                        }
                    </div>
                </div>
            )
        })
    )
}

export default CustomCheckBox