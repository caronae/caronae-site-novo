// import './IconForm.css'

function IconForm(props) {
    const { alt, src, width, height, margin, backgroundColor, shadow, wide, image } = props

    return (
        <img alt={alt} src={src} style={{
            width: width, 
            height: height, 
            backgroundColor: backgroundColor,
            marginRight: margin,
            marginLeft: margin, 
            borderRadius: '200px', 
            padding: wide ? '10px 32px' : (image ? '0' : '10px'), 
            boxShadow: `14px 0 0 ${shadow}`
        }} />
    )
};

export default IconForm;