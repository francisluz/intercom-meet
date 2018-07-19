import React, { Component } from 'react';
import logo from './intercom-logo.svg';
import './App.css';
import Api from './Api';
import MapWithAMarkerClusterer from './MapWithAMarkerClusterer';

class App extends Component {
  state = {
    customers: [],
    searchValue: ""
  };

  componentDidMount(){
    window.Intercom("boot", {
      app_id: "sah9y31r"
    });
  }

  componentWillMount() {
    const script = document.createElement("script");

    const scriptText = document.createTextNode("(function(){var w=window;var ic=w.Intercom;if(typeof ic===\"function\"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/sah9y31r';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()");

    script.appendChild(scriptText);
    document.head.appendChild(script);
  }

  handleSearchChange = e => {
    const value = e.target.value;

    this.setState({
      searchValue: value
    });
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleSearchClick();
    }
  }

  handleSearchClick = e => {
    const value = this.state.searchValue;

    if (value === "") {
      this.setState({
        customers: []
      });
    } else {
      
      Api.search(value, data => {
        this.setState({
          customers: data
        });
      });
    }
  }

  render() {
    const { customers } = this.state;

    console.log(customers);

    const customerRows = customers.map((customer, idx) => (
      <tr key={idx}>
        <th scope="row">{customer.user_id}</th>
        <td>{customer.name}</td>
      </tr>
    ));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Intercom Meet</h1>
        </header>
        <p className="App-intro intro">
          <div className="container">
            <p>Let's invite some customers around to a coffee. </p>
            <div className="row col-4 justify-content-center form-inline">
              <div class="input-group mb-2 mr-sm-2">
                <input
                  name="searchBox"
                  className="form-control border border-primary"
                  type="text"
                  placeholder="Type the distance"
                  value={this.state.searchValue}
                  onChange={this.handleSearchChange}
                  onKeyPress={this.handleKeyPress}
                />
                <div class="input-group-append">
                  <div class="input-group-text border border-primary">KM</div>
                </div>
                <div class="input-group-append">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={this.handleSearchClick}
                  >Search</button>
                </div>
              </div>
              
              <a><i class="fas fa-search"></i></a>
            </div>
          </div>
        </p>
        <div className="container">
        <div className="row">
          <div className="col-4 Scroll-box">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>
              <tbody>
                {customerRows}
              </tbody>
            </table>
          </div>
          <div className="col-8">
            <MapWithAMarkerClusterer markers={this.state.customers} />
          </div>          
        </div>
        </div>
        <footer className="container">
        <p>by Francis Luz</p>
      </footer>
      </div>
    );
  }
}

export default App;
