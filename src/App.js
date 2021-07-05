// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {price: 1};
  }

  render() {
    return (
      <div className="container-fluid">
        <center><h1>Rack Calculator</h1></center>
        <div className="row">
          <div className="col-4">
            <div className="form-floating">
              <select className="form-select" id="height">
                <option value="78">78"</option>
              </select>
              <label htmlFor="height">Height</label>
            </div>
          </div>

          <div className="col-4">
            <div className="form-floating">
              <select className="form-select" id="width">
                <option value="36">36"</option>
              </select>
              <label htmlFor="width">Width</label>
            </div>
          </div>
          <div className="col-4">
            <div className="form-floating">
              <select className="form-select" id="depth">
                <option value="15">15"</option>
              </select>
              <label htmlFor="depth">Depth</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-floating">
              <select className="form-select" id="sheet">
                <option value="30">28L</option>
                <option value="28">28G</option>
                <option value="26">26G</option>
                <option value="24">24G</option>
                <option value="22">22G</option>
                <option value="20">20G</option>
                <option value="18">18G</option>
              </select>
              <label htmlFor="sheet">Sheet</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-floating">
              <select className="form-select" id="angle">
                <option value="18">18G</option>
                <option value="16">16G</option>
                <option value="14">14G</option>
                <option value="12">M.S</option>
              </select>
              <label htmlFor="angle">Angle</label>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Price:</th>
                <td>{this.state.price} ₹</td>
              </tr>
              <tr>
                <th scope="row">Weight~</th>
                <td>KG</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="weight" />
            <label className="form-check-label" htmlFor="weight">W</label>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="retail" />
            <label className="form-check-label" htmlFor="retail">R</label>
          </div>
        </div>
      </div>
    );
  }
}

export default App;