import {useState} from 'react';
import Author from './Author';



const CardCookie = ({data}) =>{
    
const [index,setIndex ] = useState(0)
const [indexImg,setIndexImg ] = useState(1)
    console.log(data);
    const random = () =>{
        setIndex(Math.ceil(Math.random()*data.length -1 ))
        if(indexImg > 3){
            setIndexImg(1)
        }else{
            setIndexImg(indexImg + 1)
        }
        
}
document.body.style =`background-image: url(/cookie-${indexImg}.jpg)`

    let dates = [...data, index]
    return(
        <section className="fortuneBox">
            <div className='author'>
            <h2>{data[index].phrase}</h2>
            </div>
            <Author date = {dates}/>
            <button className="button-fortune" onClick={random}>Conoce mas</button>
        </section>
    )

}
export default CardCookie