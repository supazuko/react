import React from 'react'

const Button = ({btnWidth, imgSrc, showIcon, btnHeight, bgColor, btnColor, btnRadius, isTrue, borderColor, label}) => {

    const buttonStyle = {
        width: btnWidth,
        height: btnHeight,
        backgroundColor: bgColor,
        color: btnColor,
        btnColor: btnColor,
        borderRadius: btnRadius,
        border: isTrue ? `1px solid ${borderColor}` : 'none'
    }

    
    return (
        <div>
            <button style={buttonStyle}>
                <span>
                    <img style={{'display': isTrue ? 'flex':'none'}} src={imgSrc} alt=''/>
                    {label}
                </span>
            </button>
        </div>
    )
}

Button.defaultProps = {
    btnWidth: '250px',
    btnHeight: '40px',
    bgColor: 'red',
    btnColor: 'white',
    borderRadius: "4px",
}

export default Button
