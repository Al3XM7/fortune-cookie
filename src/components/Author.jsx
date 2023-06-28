const Author = ({date}) => {
    let person = date[15]
    return(
        <div>
            <h3>{date[person].author}</h3>
        </div>
        
    )
}
export default Author