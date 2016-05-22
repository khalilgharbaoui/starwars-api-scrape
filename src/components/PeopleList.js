import React from 'react';
import $ from 'jquery';
import PersonLink from './PersonLink';
import HomePlanet from './HomePlanet';
import Pagination from './Pagination';
import { Link } from 'react-router';


class PeopleList extends React.Component {

  constructor() {
    super();

    this.state = {
      data: [],
      next: 'http://swapi.co/api/people/?page=2&format=json',
      previous: null,
      currentpage: '1'
    }
  }

getPeopleData() {
    let component = this;
    let url = `http://swapi.co/api/people/?page=${component.props.params.pageId}&format=json`

    $.ajax({
      url: url,
      contentType: 'application/json',
      method: 'GET'
    })
    .success((data) => { })
    .done((data) => { this.setState({
       data: data.results,
       next: data.next,
       previous: data.previous,
       currentpage: component.props.params.pageId
     });
    })
    .fail((data) => { console.log( "Failed with status " + data.status ); });
  }

  componentDidMount() {
    this.getPeopleData();
  }

  updatePage(){
    let component = this;
    // without this if statement there is an infinate loop!!
    if (this.state.currentpage !== this.props.params.pageId) {
      this.getPeopleData();
    }
  }

render() {
  return(
      <div>
        <div className="container">
          <div className="row">
            {this.state.data.map(function(person, i) {
              return (
                <div
                  className="col-md-4"
                  key={Math.random() + i}>
                  <h3>
                    {person.name}
                  </h3>
                  Year of birth: {person.birth_year}
                  {person.homeworld &&
                    <HomePlanet url={person.homeworld} />
                  }
                  <h4>
                  {person.url &&
                    <PersonLink url={person.url} />}
                  </h4>
                </div>
              );
            })
          }
          </div>
        </div>
        <Pagination next={this.state.next} previous={this.state.previous} type={'people'} onClick={this.updatePage()} />
      </div>
    );
  }
}

export default PeopleList;
