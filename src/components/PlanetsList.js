import React from 'react';
import $ from 'jquery';
import Pagination from './Pagination';




class PlanetsList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data:[],
      next: 'http://swapi.co/api/planets/?page=2&format=json',
      previous: null,
      currentpage: '1'

    }
  }

  getPlanetsData() {
    let component = this;
    let pageId = component.props.params.pageId;
    console.log("Current Page ID is: " + pageId);

    $.ajax({
      dataType: 'json',
      url: `http://swapi.co/api/planets/?page=${pageId}&format=json`,
      contentType: 'application/json',
      method: 'GET'

    })
    .success((data) => {
      component.setState({
        data: data.results,
        next: data.next,
        previous: data.previous,
        currentpage: component.props.params.pageId
      });
    })
    .done((data) => {


    })
    .fail(function(data) {
      console.log("Failed but status " + data.status);
    });
  }

  componentDidMount() {
    this.getPlanetsData();
  }

  updatePage(){
    // without this if statement there is an infinate loop!!
    let component = this;
    if (this.state.currentpage !== this.props.params.pageId) {
      this.getPlanetsData();
    }
  }

  render() {

    return(
      <div>
        <div className="container">
          <div className="row">
            {this.state.data.map(function(planet, i) {
              return (
                <div
                  className = "bg-success"
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
  <div className="bg-warning">
    {planet.residents.map(function(residenturl, i) {
      return (
        <p key={i}>

          {residenturl}
        </p>
      );
    }, this)}
  </div>
</div>
);
}, this)}


</div>
</div>

<br />
<Pagination
  next={this.state.next}
  previous={this.state.previous}
  type={'planets'}
  onClick={this.updatePage()} />
<br />

</div>
);
}
}



export default PlanetsList;
