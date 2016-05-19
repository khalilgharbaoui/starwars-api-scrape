import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';
import PersonLink from './PersonLink';
import HomePlanet from './HomePlanet';
import Person from './Person';


class PeapolList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      url: 'http://swapi.co/api/people/?format=json',
      nextpage: '',
      previouspage: '',
      key: ''
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

  componentWillMount() {
    this.getData();
  }



  render() {
    return(
      <div>
        <div className="container">
          <div className="row">
            {this.state.data.map(function(person, i) {
              return (
                <div
                  className = "col-md-4"
                  key={this.state.key + i + Math.random()}>
                  <h3>
                    {person.name}
                  </h3>
                  Year of birth: {person.birth_year}
                  <HomePlanet url={person.homeworld} />
                  <PersonLink url={person.url} />
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



export default PeapolList;
