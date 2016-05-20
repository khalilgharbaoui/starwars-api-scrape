import React from 'react';
import $ from 'jquery';
import Resident from './Resident';
import ResidentLink from './ResidentLink';



class ResidentsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: ''
    }
  }

  getData() {
    let component = this;
    let url = this.props.url;




    //http://api.jquery.com/jQuery.ajax/
    $.ajax({
      url: url,
      dataType: 'json',
      contentType: 'application/json',
      cache: true,
      method: 'GET'
    })
    .success((data) => {
      component.setState({

        data: data.residents

      });
    })
    .done((data) => {

    })
    .fail(function(data) {

      console.log("Failed but status " + data.status);
    });
  }


  componentDidMount() {
    this.setState({
      key: Math.random()
    });
    this.getData();
  }

  render() {
    return (
        <div className="container">
          <div className="row">
              {this.state.data.map(function(resident, i) {

                return (
                  <div
                    className="col-md-3"
                    key={this.state.key + i}>
                    <h3>
                      <Resident url={resident} />
                      <ResidentLink url={resident}/>
                    </h3>
                  </div>
                );
              }, this)}

          </div>

        </div>
    );
  }
}



export default ResidentsList;
