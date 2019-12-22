import React from "react";
import Eolienne from "./representations/eolienne";
import PanneauSolaire from "./representations/panneau-solaire";
import Barrage from "./representations/barrage";
import Fossile from "./representations/fossile";
import Nucleaire from "./representations/nucleaire";
import Bioenergies from "./representations/bioenergies";

class Representations extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
        const taux_charge = isNaN(this.props.pourcentage) ? "-" : Math.round(this.props.pourcentage);
        const production = isNaN(this.props.pourcentage) ? "-" : Math.round(this.props.pourcentage);
        const capacites = isNaN(this.props.capacites) ? "-" : Math.round(this.props.capacites);
        let svg;
        let classes = "legende-moyen-production legende-";
        switch (this.props.type) {
            case "Photovoltaïque":
                svg = <PanneauSolaire pourcentage={taux_charge}/>;
                classes += "photovoltaique"
                break;
            case "Éolien":
                svg = <Eolienne pourcentage={taux_charge}/>;
                classes += "eolien"
                break;
            case "Hydraulique":
                svg = <Barrage pourcentage={taux_charge}/>;
                classes += "hydraulique"
                break;
            case "Nucléaire":
                svg = <Nucleaire pourcentage={taux_charge}/>;
                classes += "nucleaire"
                break;
            case "Bioénergies":
                svg = <Bioenergies pourcentage={taux_charge}/>;
                classes += "bioenergies"
                break;
            case "Fossile":
                svg = <Fossile pourcentage={taux_charge}/>;
                classes += "thermique"
                break;
        }
      
        return (
            <div class="representation">
            <div class="legende">
                <span className={classes}></span>
                <span>{this.props.type}</span>
            </div>
            <div class="affichage">
                {svg}
                <div class="statistiques">
                    <div class="titre">Taux de charge :</div>
                    <div>{taux_charge} %</div>
                    <div class="titre">Production :</div>
                    <div>{production} Mwh</div>
                    <div class="titre">Capacites :</div>
                    <div>{capacites} Mw</div>
                </div>
            </div>
        </div>
    );
  }
}
export default Representations;