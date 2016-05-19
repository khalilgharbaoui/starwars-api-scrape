import React from 'react';
import jQuery from 'jquery';
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

    let u = this.props.url;

    if (u === undefined && this.props.params.personId) {
      let personId = this.props.params.personId;
      console.log(personId);
      u = `http://swapi.co/api/people/${personId}/`;
    }

    //http://api.jquery.com/jQuery.ajax/
    jQuery.ajax({
      url: u + '?format=json',
      dataType: 'json',
      contentType: 'application/json',
      cache: false,
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
    jQuery.ajax({
      url: homeworlddataurl + '?format=json',
      dataType: 'json',
      contentType: 'application/json',
      cache: false,
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

    console.log(person);

    return (
      <div>
        <div className="well col-md-12">
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
        <h1>
          Also From {person.name}s Planet {homeworld.name}:
        </h1>
        {person.homeworld &&
          <ResidentsList url={person.homeworld + '?format=json'} />
        }
      </div>

    );
  }
}



export default Person;
