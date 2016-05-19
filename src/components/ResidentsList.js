import React from 'react';
import $ from 'jquery';
import Resident from './Resident';


class ResidentsList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []

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
      cache: false,
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
    this.getData();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div>
              {this.state.data.map(function(resident, i) {
                return (
                  <div className = "col-md-3" key={i}>
                    <h3>
                      <Resident url={resident+'?format=json'} />
                    </h3>
                  </div>
                );
              }, this)}
            </div>

          </div>

        </div>
      </div>
    );
  }
}



export default ResidentsList;