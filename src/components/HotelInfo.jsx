import React, { useState, useEffect } from 'react';
//import ServiceAndAmenitiesData from './data/services_and_amenities.json';
// import AccesibilitiesData from './data/accessibilities.json';
import ArrivalInfoData from './data/arrival_information.json';



const HotelInfo = () => {

  const [AccesibilitiesData, setAccesibilitiesData] = useState([]);
  const [ServiceAndAmenitiesData, setServiceAndAmenitiesData] = useState([]);

  const loadAccesibilitiesData = async () => {
    const resp = await fetch('https://jlr0rtsx62.execute-api.ca-central-1.amazonaws.com/Production/accessibilities');
    let jsonData = await resp.json();

    setAccesibilitiesData(jsonData);
  }

  const loadServiceAndAmenitiesData = async () => {
    const resp = await fetch('https://jlr0rtsx62.execute-api.ca-central-1.amazonaws.com/Production/services');
    let jsonData = await resp.json();

    setServiceAndAmenitiesData(jsonData);
  }

  useEffect(() => {
    // Load the menu links from the API Gateway
    loadAccesibilitiesData();
    loadServiceAndAmenitiesData();
    // Other side effects
  }, []);
  return (
    <div className="scene" id="hotelinfo">
      <article className="heading">
        <h1>Essential Info</h1>
      </article>
      <article id="usefulinfo">
        <section id="arrivalinfo">
          <h2>Arrival Information</h2>
          <ul>
            {
              ArrivalInfoData.map((val) =>
                <li><strong>{val.info}</strong> {val.description}</li>
              )
            }
          </ul>
        </section>
        <section className="checklist" id="services">
          <h2>Services and Amenities</h2>
          <p>Our services and amenities are designed to make your travel easy, your stay comfortable, and your experience one-of-a-kind.</p>
          <ul>
            {
              ServiceAndAmenitiesData.map((val) =>
                <li>{val.service}</li>
              )
            }
          </ul>
        </section>
        <section className="checklist" id="accessibility">
          <h2>Accessibility</h2>
          <p>We're committed to maintaining the same quality of service for every individual. We offer the following facilities for those with special needs:</p>
          <ul>
            {
              AccesibilitiesData.map((val) =>
                <li>{val.name}</li>
              )
            }
          </ul>
        </section>
      </article>
      <article id="greenprogram">
        <h2>Landon Green Program</h2>
        <p><strong>The Landon Hotel - London</strong> was recently renovated, and we considered the impact on the earth the entire way. From green building materials, to solar power, to energy-friendly lighting and appliances throughout the hotel - we’re saving energy in every socket, outlet, and switch. We’ve also initiated a recycling and composting program that reduces the load to local landfills, while providing valuable raw material for use in new products, or in the case of compost, for use in local gardens and landscapes.</p>
      </article>
    </div>
  );

}

export default HotelInfo;