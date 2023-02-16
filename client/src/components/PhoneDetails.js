import { Link } from "react-router-dom";
import { useParams} from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";
export default function PhoneDetails(props){
    
    const {API_URL} = props
    const {phoneId} = useParams()
    const [phoneObj,SetPhoneObj] = useState(null)
    
    const getPhoneDetails = ()=>{
        axios.get(`${API_URL}/phones/${phoneId}`)
            .then(responseAxios=>{
                
                SetPhoneObj(responseAxios.data[0])
            })
            .catch(e=>{
                console.log("error getting the details of a phone",e)
            })
    }

    useEffect(()=>{
        getPhoneDetails()
    },[phoneId])

    const renderPhoneDetails = ()=>{

        return(<div className="phone-details">
                <div className="img-container"><img src={require(`../../public/images/${phoneObj.imageFileName}`)}  alt={phoneObj.imageFileName} /></div>
                <h3>{phoneObj.name}</h3>
                <h4>manufacter: {phoneObj.manufacturer}</h4>
                <p>{phoneObj.description}</p>
                <p>color: {phoneObj.color}</p>
                <p>price: {phoneObj.price}</p>
                <p>screen: {phoneObj.screen}</p>
                <p>processor: {phoneObj.procesor}</p>
                <p>ram: {phoneObj.ram}</p>
    

            </div>)
    }
  
    return(<>

        {phoneObj ? renderPhoneDetails() : "loading...."}

    </>)
}