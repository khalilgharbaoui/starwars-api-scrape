import React from 'react';
import $ from 'jquery';
import PersonLink from './PersonLink';
import HomePlanet from './HomePlanet';
import Pagination from './Pagination';

class PeopleList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
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
    .done((data) => { this.setState({ data: data.results }); })
    .fail((data) => { console.log( "Failed with status " + data.status ); });
  }
  componentDidMount() {
    this.getPeopleData();
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
        <Pagination pageId={this.props.params.pageId} onClick={this.getPeopleData()}/>
      </div>
    );
  }
}

export default PeopleList;
