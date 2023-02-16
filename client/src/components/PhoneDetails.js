import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./PhoneDetails.css";

export default function PhoneDetails(props) {
    
  const { API_URL } = props;
  const { phoneId } = useParams();
  const [phoneObj, SetPhoneObj] = useState(null);

  const getPhoneDetails = () => {
    axios
      .get(`${API_URL}/phones/${phoneId}`)
      .then((responseAxios) => {
        SetPhoneObj(responseAxios.data[0]);
      })
      .catch((e) => {
        console.log("error getting the details of a phone", e);
      });
  };

  useEffect(() => {
    getPhoneDetails();
  }, [phoneId]);

  const renderPhoneDetails = () => {
    return (
      <div className="phone-details">
        <div className="img-container">
          <img
            src={require(`../../public/images/${phoneObj.imageFileName}`)}
            alt={phoneObj.imageFileName}
          />
        </div>
        <div className="phone-details-text">
          <h2>{phoneObj.name}</h2>
          <h4>manufacter: {phoneObj.manufacturer}</h4>
          <p>{phoneObj.description}</p>
          <p>
            <b>color:</b> {phoneObj.color}
          </p>
          <p>
            <b>price:</b> {phoneObj.price}
          </p>
          <p>
            <b>screen:</b> {phoneObj.screen}
          </p>
          <p>
            <b>processor:</b> {phoneObj.procesor}
          </p>
          <p>
            <b>ram:</b> {phoneObj.ram}
          </p>
        </div>
      </div>
    );
  };

  return <>{phoneObj ? renderPhoneDetails() : "loading...."}</>;
}
