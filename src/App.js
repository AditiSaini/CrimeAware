import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    var UsStates = {
      "Alabama": "AL",
      "Alaska": "AK",
      "American Samoa": "AS",
      "Arizona": "AZ",
      "Arkansas": "AR",
      "California": "CA",
      "Colorado": "CO",
      "Connecticut": "CT",
      "Delaware": "DE",
      "Dist. of Columbia": "DC",
      "Florida": "FL",
      "Georgia": "GA",
      "Guam": "GU",
      "Hawaii": "HI",
      "Idaho": "ID",
      "Illinois": "IL",
      "Indiana": "IN",
      "Iowa": "IA",
      "Kansas": "KS",
      "Kentucky": "KY",
      "Louisiana": "LA",
      "Maine": "ME",
      "Maryland": "MD",
      "Marshall Islands": "MH",
      "Massachusetts": "MA",
      "Michigan": "MI",
      "Micronesia": "FM",
      "Minnesota": "MN",
      "Mississippi": "MS",
      "Missouri": "MO",
      "Montana": "MT",
      "Nebraska": "NE",
      "Nevada": "NV",
      "New Hampshire": "NH",
      "New Jersey": "NJ",
      "New Mexico": "NM",
      "New York": "NY",
      "North Carolina": "NC",
      "North Dakota": "ND",
      "Northern Marianas": "MP",
      "Ohio": "OH",
      "Oklahoma": "OK",
      "Oregon": "OR",
      "Palau": "PW",
      "Pennsylvania": "PA",
      "Puerto Rico": "PR",
      "Rhode Island": "RI",
      "South Carolina": "SC",
      "South Dakota": "SD",
      "Tennessee": "TN",
      "Texas": "TX",
      "Utah": "UT",
      "Vermont": "VT",
      "Virginia": "VA",
      "Virgin Islands": "VI",
      "Washington": "WA",
      "West Virginia": "WV",
      "Wisconsin": "WI",
      "Wyoming": "WY"
    };
  }


componentDidMount(){
    var axios = require('axios');
    var crime = "larceny";
    var code = this.state.nameOfStates;

  
    var url = "https://api.usa.gov/crime/fbi/sapi/api/summarized/state/"+ code+"/"+crime+"/2000/2014?API_KEY=rKAnI6yKWkJRa9dDA7LcJ2mZbOgdNxPxhtEGLojH";
    axios.get(url).then((response)=>{
      console.log(response)
      var count = 0
      var count2 = 0
      response.data.results.forEach(function(item){ 
        count = count + item.actual;
        count2++;
      });
      this.setState({...this.state, "number": count/count2})
    });
  }

  handleState = (nameOfStates) => {
    // Update state
    this.setState({...this.state, "nameOfStates": nameOfStates})
  }

  render(){
    var axios = require('axios');
    var crime = "larceny";
    var code = this.state.nameOfStates;

  
    var url = "https://api.usa.gov/crime/fbi/sapi/api/summarized/state/"+code+"/"+crime+"/2000/2014?API_KEY=rKAnI6yKWkJRa9dDA7LcJ2mZbOgdNxPxhtEGLojH";
    axios.get(url).then((response)=>{
      console.log(response)
      var count = 0
      var count2 = 0
      response.data.results.forEach(function(item){ 
        count = count + item.actual;
        count2++;
      });
      this.setState({...this.state, "number": count})
    });


  const number = this.state !== null ? this.state.number : 0
  console.log(this.state)

  return (
    <div className="App">
      <SignIn number={number} handleState={this.handleState}/>
    </div>
  );
}}

export default App;
