export default function Card({title,price,description}){
    return (
    <>
    <div>
        <h3>{title}</h3>
    </div>
    
    <div>
    <div>
        <h4>`${price }/ mo`</h4>
    </div>
    <div>
        {description.map((l,index)=>{
            return <li key={index}>{l}</li>
        })}
    </div>
    </div>
    
    </>
    )
}