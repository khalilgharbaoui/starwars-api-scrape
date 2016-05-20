import React from 'react';
import $ from 'jquery';
import PersonLink from './PersonLink';
import HomePlanet from './HomePlanet';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';


class PeopleList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nextpage: null,
      previouspage: null,
      data: []
    }
  }

  getPeopleData() {
    let pageId = this.props.params.pageId;
    console.log("Page ID is: " + pageId);
    //http://api.jquery.com/jQuery.ajax/

    $.ajax({
      dataType: 'json',
      url: `http://swapi.co/api/people/?page=${pageId}&format=json`,
      contentType: 'application/json',
      method: 'GET'
    })
    .success((data) => {

    })
    .done((data) => {

      this.setState({
          nextpage: data.next,
          previouspage: data.previous,
          data: data.results
        })

    })
    .fail(function(data) {
      console.log("Failed with status " + data.status);
    });
  }


  componentDidMount() {
    this.getPeopleData();
  }

  render() {
    if(this.state.previouspage === null){
      var previouspagebutton = '';
    }
    else{
      var previouspagebutton =
      <PreviousButton
        url={this.state.previouspage}
        onClick={this.getPeopleData()}
        type={'people'}  />
    }
    if(this.state.nextpage === null){
      var nextpagebutton = '';
    }
    else{
      var nextpagebutton =
      <NextButton
        url={this.state.nextpage}
        onClick={this.getPeopleData()}
        type={'people'} />
    }
    return(
      <div>
        <div className="container">
          <div className="row">
            {this.state.data.map(function(person, i) {
              return (
                <div
                  className="col-md-4"
                  key={i}>
                  <h3>
                    {person.name}
                  </h3>
                  Year of birth: {person.birth_year}
                  {person.homeworld &&
                    <HomePlanet url={person.homeworld + '?format=json'} />}
                  <h4>
                    <PersonLink url={person.url} />
                  </h4>
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
      </div>
    );
  }
}

export default PeopleList;
