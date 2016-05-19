import React from 'react';
import jQuery from 'jquery';
import PersonLink from './PersonLink';
import HomePlanet from './HomePlanet';
import Person from './Person';


class PeapolList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      url: 'http://swapi.co/api/people/?format=json',
      nextpage: '',
      previouspage: '',
      key: '',
      data: []

    }
  }


  nextPage(event) {
    this.setState({
      url: this.state.nextpage,
      key: Math.random()
      }, this.getData());
  }

  previousPage(event) {
    this.setState({
      url: this.state.previouspage,
      key: Math.random()
  }, this.getData());
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
        previouspage: data.previous,
        key: Math.random()
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
                  <h4><PersonLink url={person.url} /></h4>
                </div>
              );
            }, this)}

          </div>
        </div>
        <br />
        <br />

        <button className="btn btn-primary"
          style={{float: 'left'}}
          onClick={this.previousPage.bind(this)}>
          Previous Page </button>
        <button className="btn btn-primary"
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
