import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';



class PlanetsList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      url: 'http://swapi.co/api/planets/?format=json',
      nextpage: '',
      previouspage: '',
      key:''
    }
  }

  getData() {


    let compo = this;
    let APIurl = compo.state.url;

    //http://api.jquery.com/jQuery.ajax/

    jQuery.ajax({
      url: APIurl,
      dataType: 'json',
      contentType: 'application/json',
      cache: false,
      method: 'GET'

    })
    .success((data) => {
      compo.setState({
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

  nextPage(event) {
    event.preventDefault();
    let component = this;
    this.setState({
      url: component.state.nextpage,
      key: Math.random()
    });
    this.getData();
  }

  previousPage(event) {
    event.preventDefault();
    let component = this;
    this.setState({
      url: component.state.previouspage,
      key: Math.random()
    });
    this.getData();
  }

  componentDidMount() {
    this.getData();
  }



  render() {
    return(
      <div>
        <div className="container">
          <div className="row">
            {this.state.data.map(function(planet, i) {
              return (
                <div
                  className = "col-md-4"
                  key={this.state.key + i}>
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

<button
  style={{float: 'left'}}
  onClick={this.previousPage.bind(this)}>
  Previous Page </button>
<button
  style={{float: 'right'}}
  onClick={this.nextPage.bind(this)}>
  Next Page </button>
<br />
<br />
</div>
);
}
}



export default PlanetsList;
