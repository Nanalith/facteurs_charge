import React from "react";
import Zone from "./Zone";
import regionDescription from "./regions-descriptions";

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.regionsDescriptions = regionDescription;

    for(var regionKey in this.regionsDescriptions) {
      let regionDescription = this.regionsDescriptions[regionKey];
      regionDescription.meilleur_facteur = this.props.meilleurs_facteurs[regionDescription.id][this.props.index_temps];
      regionDescription.estSelectionnee = regionDescription.id == this.props.id_zone_selectionnee;
    }
  }

  handleClick(valeur) {
    this.props.handleClick(valeur);
    this.calculSelection();
  }

  calculSelection() {
    for(let region_indice in this.regions) {
      let region = this.regions[region_indice];
      region.props.description.estSelectionnee = region.props.description.id == this.props.id_zone_selectionnee;
    }
  }

  render() {
    this.regions = [];
    for (let i = 0; i < this.regionsDescriptions.length; i++) {
      this.regions.push(
        <Zone
          key={this.regionsDescriptions[i].id} 
          description={this.regionsDescriptions[i]}
          onClick={(i) => this.handleClick(i)}
        />
      );
    }
    // let classes = 'region ' + this.props.meilleurs_facteurs[0] + '_couleur';
    return (
      <div className="map">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" display="inline" version="1" viewBox="0 0 800 600">
          {this.regions}
        </svg>
      </div>
    );
  }
}

export default Map;