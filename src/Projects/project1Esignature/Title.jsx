const Title = ({text, classes}) => {

    return <h1 className={classes}> {!text ? "Labas" : text} </h1>
}



export default Title