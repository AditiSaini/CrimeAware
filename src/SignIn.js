import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBJumbotron } from 'mdbreact';
import './SignIn.css';

class FormPage extends React.Component {
	state={
			data: ""
		}

		// const stateMap = {"Alabama":"AL", "Florida":"FL", "Illinois":"IL", "Indiana":"IN", "Louisiana":"LA"};

		handleChange = (e) => {
			this.setState({ [e.target.id]: e.target.value})
			this.props.handleState(e.target.value)
		}

		handleSubmit = (e) => {
			console.log(this.state.data);
			e.preventDefault();		
		}

	render (){
  return (
    <MDBCol>
    <MDBRow>
      <MDBCard style={{ width: "88rem" }}>
      <MDBJumbotron style={{backgroundColor: "black"}}>
        <MDBCardImage style={{width: "40rem"}} className="img-fluid" src="https://wallpapercave.com/wp/cuZifzQ.jpg" waves />
      </MDBJumbotron>
      <MDBJumbotron style={{backgroundColor: "#F9E79F"}}>
        <MDBCardBody>
          <MDBCardTitle className='quote' style={{fontSize: '50px', marginBottom: '100px'}} >Be Aware with Crime Aware!</MDBCardTitle>
          <form>
          <MDBRow center>
          <MDBCol md='6'>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Enter area
            </label>
            <input
              type="text"
              id="data"
              className="form-control"
              onChange={this.handleChange}/>
          </MDBCol>
          </MDBRow>
          </form>
          <MDBRow center>
          <MDBBtn color="danger" href="#" onClick={this.handleSubmit}>Analyze</MDBBtn>
          </MDBRow>
          <MDBRow center style={{fontSize: '16px', paddingTop: '30px'}}>
          <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Number of recent crime Incidents in the last year
           </label>
           </MDBRow>
           <MDBRow center>
          <div id="text-screen" className="d-inline p-2 bg-primary text-white"><p>{this.props.number}</p></div>
          </MDBRow>
        </MDBCardBody>
        </MDBJumbotron>
      </MDBCard>
      </MDBRow>
    </MDBCol>
  );
}};

export default FormPage;