import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';



class PlanetsList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nextpage: null,
      previouspage: null,
      data: []
    }
  }

  getData() {
    let component = this;
    let pageId = component.props.params.pageId;
    if (component.props.params.pageId === undefined) {
      let pageId = 1;
    } else {
      let pageId = component.props.params.pageId;
    }


    //http://api.jquery.com/jQuery.ajax/

    jQuery.ajax({
      url: `http://swapi.co/api/planets/?page=${pageId}&format=json`,
      dataType: 'json',
      contentType: 'application/json',
      cache: true,
      method: 'GET'

    })
    .success((data) => {
      component.setState({
        data: data.results,
        nextpage: data.next,
        previouspage: data.previous
      });
    })
    .done((data) => {


    })
    .fail(function(data) {
      console.log("Failed but status " + data.status);
    });
  }



  componentDidMount() {
    this.getData();
  }

  render() {
    if(this.state.previouspage === null){
      var previouspagebutton = '';
    }
    else{
      var previouspagebutton =
      <PreviousButton
        url={this.state.previouspage}
        onClick={this.getData()}
        type={'planets'}  />
    }
    if(this.state.nextpage === null){
      var nextpagebutton = '';
    }
    else{
      var nextpagebutton =
      <NextButton
        url={this.state.nextpage}
        onClick={this.getData()}
        type={'planets'} />
    }
    return(
      <div>
        <div className="container">
          <div className="row">
            {this.state.data.map(function(planet, i) {
              return (
                <div
                  className = "col-md-4 bg-success"
                  key={i}>
                  <h3>
                    {planet.name}
                  </h3>
                  <p>
                    Rotation period: <strong>
                    {planet.rotation_period}
                  </strong>
                </p>
                <p>
                  Orbital period: <strong>
                  {planet.orbital_period}
                </strong>
              </p>
              <p>
                Diameter: <strong>
                {planet.diameter}
              </strong>
            </p>
            <p>
              Climate: <strong>
              {planet.climate}
            </strong>
          </p>
          <p>
            Gravity: <strong>
            {planet.gravity}
          </strong>
        </p>
        <p>
          Terrain: <strong>
          {planet.terrain}
        </strong>
      </p>
      <p>
        Surface water: <strong>
        {planet.surface_water}
      </strong>
    </p>
    <p>
      Population: <strong>
      {planet.population}
    </strong>
  </p>
  {/*<div>{planet.residents.map(function(residenturl, i) {
    return (
    <p key={i}>{residenturl}</p>
  );
}, this)}</div>*/}
</div>
);
}, this)}


</div>
</div>
<br />
<br />
{previouspagebutton}
{nextpagebutton}
<br />
<br />
</div>
);
}
}



export default PlanetsList;
