import { Link } from "react-router-dom";

export default function AllPhones(props){
    
    const {allPhonesData} = props
    console.log(allPhonesData)

    const renderPhones =()=>{


        return(<div className="all-phones">
            {allPhonesData.map(phoneObj=>(
                <div className="phone-in-list" key={phoneObj.id}>
                  <Link to={`/${phoneObj.id}`}>
                    <h3>{phoneObj.name}</h3>

                  </Link>
                    
                </div>
            ))}
        </div>)
    }
    return(<div>

    <h2>All Phones</h2>
    {allPhonesData ? renderPhones() : "loading..."}

    </div>)
}