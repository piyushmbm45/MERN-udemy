import React from "react";

import "./PlaceList.css";
import Card from "../../shared/components/UIelements/Card";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places Found</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creator={place.creator}
            coordinates={place.location}
          />
        );
      })}
    </ul>
  );
};

export default PlaceList;
