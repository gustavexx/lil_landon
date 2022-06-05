import React, {useState, useEffect} from 'react';
//import menuLinksData from './data/menu_links.json';

const Header = () => {

    const [menuLinksData, setMenuLinksData] = useState([]);

    const loadMenuLinksData = async() => {
        // Query the API Gateway

        const resp = await fetch('https://jlr0rtsx62.execute-api.ca-central-1.amazonaws.com/Production/menu-links');
        let jsonData = await resp.json();

        // Assign the response data to our state variable
        setMenuLinksData(jsonData);
    }
    useEffect(()=> {
      // Load the menu links from the API Gateway
      loadMenuLinksData();

      // Other side effects
    }, []);
    return (
        <header id="intro">
          <article className="fullheight">
            <div className="hgroup">
              <h1>Landon Hotel Test</h1>
              <h2>West London</h2>
              <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
            </div>
          </article>

          <nav id="nav">
            <div className="navbar">
              <div className="brand"><a href="#welcome"><span>Hotel</span></a></div>
              <ul>
                {
                   menuLinksData.map((link)=>
                        <li><a className={`icon ${link.class}`} href={`#hotelinfo ${link.href}`}><span>{link.text}</span></a></li>  
                   )
                }   
              </ul>
            </div>
          </nav>
        </header>
    );
}

export default Header;