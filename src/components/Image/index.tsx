interface IProps{
    imgURL: string,
    alt: string,
    className:string
}

const Image = ({imgURL, alt,className}:IProps ) => {
    return (
        <img className={className} src={imgURL} alt={alt} />
    )
}

export default Image 