import React from 'react';
import $ from 'jquery';
import ResidentsList from './ResidentsList';
import HomePlanet from './HomePlanet';


class Person extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      homeworlddata: []
    }
  }
  
  getData() {

    let url = this.props.url;

    if (url === undefined && this.props.params.personId) {
      let personId = this.props.params.personId;
      console.log(personId);
      url = `http://swapi.co/api/people/${personId}/`;
    }

    //http://api.jquery.com/jQuery.ajax/
    $.ajax({
      url: url + '?format=json',
      dataType: 'json',
      contentType: 'application/json',
      cache: true,
      method: 'GET'

    })
    .success((data) => {
      this.setState({

        data: data,


      });
    })
    .done((data) => {
      this.getHomeworldData();
    })
    .fail(function(data) {

      console.log("Failed but status " + data.status);
    });

  }



  getHomeworldData() {

    let homeworlddataurl = this.state.data.homeworld;



    //http://api.jquery.com/jQuery.ajax/
    $.ajax({
      url: homeworlddataurl + '?format=json',
      dataType: 'json',
      contentType: 'application/json',
      cache: true,
      method: 'GET'

    })
    .success((data) => {
      this.setState({

        homeworlddata: data


      });
    })
    .done((data) => {
      console.log(this.state.homeworlddata);
    })
    .fail(function(data) {

      console.log("Failed but status " + data.status);
    });

  }

  componentWillMount() {
    this.getData();
  }

  render() {
    let person = this.state.data;
    let homeworld = this.state.homeworlddata;
    return (
      <div>
        <div className="well col-md-5">
          <h1>
            {person.name}s details:
          </h1>
          <p>
            Natural habitat: {homeworld.terrain}
          </p>
          <p>
            Birth Year: {person.birth_year}
          </p>
          <p>
            Height: {person.height}
          </p>
          <p>
            Mass: {person.mass}
          </p>

          <p>
            Homeworld gravity: {homeworld.gravity}
          </p>
          <p>
            Hair Color: {person.hair_color}
          </p>
          <p>
            Skin Color: {person.skin_color}
          </p>
          <p>
            Eye Color: {person.eye_color}
          </p>

          <p>
            Gender: {person.gender}
          </p>
        </div>
        <div className="col-md-12">
          <h1>
            Also From {person.name}s Planet {homeworld.name}:
          </h1>
        </div>
        {person.homeworld &&
          <ResidentsList url={person.homeworld + '?format=json'} />
        }
      </div>

    );
  }
}



export default Person;
