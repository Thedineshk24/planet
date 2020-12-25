import React, { useState } from "react";
import { ListGroup, ListGroupItem, Container } from "reactstrap";
import { FaCheck, FaStar } from "react-icons/fa";

const Home = ({ planet }) => {
    console.log("Planet", planet);

    // return 0;

  
  // console.log(favPlanet);

  const [fav, setFav] = useState(false);

  // const fetchIsFav = () => {
  //   if(!fav){
  //     // if fav is true then
  //     setFav()
  //   }
  // }
 
  // console.log(fav);

  return (
    <Container fluid>
      <ListGroup className=".col-md-8">
        {planet.map((item) => (
          <ListGroupItem key={item.id}>
            {item.name}
            {fav ? (
              <span
                style={{ float: "right" }}
              >
                <FaStar />
              </span>
            ) : (
              <span
                style={{ float: "right" }}
                id={item.id}
                onClick={e => e.target.isFavourite ? null : setFav(!e.target.isFavourite)}
              >
                <FaCheck/>
              </span>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Home;
