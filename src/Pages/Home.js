import React, { useState } from "react";
import { ListGroup, ListGroupItem, Container } from "reactstrap";
import { FaCheck, FaStar } from "react-icons/fa";

const Home = ({ planet }) => {
    console.log("Planet", planet);

  
  // console.log(favPlanet);

  let favStar = false;
  const [fav, setFav] = useState(false);


  const fetchFavData = (e) => {
    e.preventDefault();
      if (!fav){
          setFav(!favStar)
      }
  }

  console.log(fav);

  return (
    <Container fluid>
      <ListGroup className=".col-md-8">
        {planet.map((item) => (
          <ListGroupItem key={item.id}>
            {item.name}
            {fav == true ? (
              <FaStar />
            ) : (
              <span
                style={{ float: "right" }}
                
              >
                <FaCheck onClick={fetchFavData}/>
              </span>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Home;
