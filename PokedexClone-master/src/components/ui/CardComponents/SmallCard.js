import PropTypes from "prop-types";
import React from "react";
import './styles.less'; // Asegúrate de que el archivo Less esté importado

function SmallCard({ height, id, image, name, weight, openBigCard }) {
  return (
    <div className="card" onClick={() => openBigCard(id, image)}>
      <div className="card-content">
        <img className="card-image" src={image} alt={name} draggable="false" />
        <div className="card-details">
          <p>#{id.toString().padStart(4, "0")}</p>
          <h2 className="card-title">{name}</h2>
          <div className="card-stats">
            <p className="weight">Weight: {weight}</p>
            <p className="height">Height: {height}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

SmallCard.propTypes = {
  height: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  openBigCard: PropTypes.func,
};

export default React.memo(SmallCard);