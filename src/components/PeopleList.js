import React from 'react';
import jQuery from 'jquery';
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
      url: `http://swapi.co/api/people/?page=${pageId}&format=json`,
      dataType: 'json',
      contentType: 'application/json',
      cache: true,
      method: 'GET'
    })
    .success((data) => {
      component.setState({
        nextpage: data.next,
        previouspage: data.previous,
        data: data.results
      });
    })
    .fail(function(data) {
      console.log("1.Failed but status " + data.status);
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
        type={'people'}  />
    }
    if(this.state.nextpage === null){
      var nextpagebutton = '';
    }
    else{
      var nextpagebutton =
      <NextButton
        url={this.state.nextpage}
        onClick={this.getData()}
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
                    <HomePlanet url={person.homeworld} />
                  }
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
