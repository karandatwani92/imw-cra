import React, { useState } from "react";
import './App.css';

export default function App() {

  const angle_gauges = [
    { value: 18, name: '18G' },
    { value: 16, name: '16G' },
    { value: 14, name: '14G' },
    { value: 12, name: 'M.S' },
  ];
  const sheet_gauges = [
    { value: 30, name: '28L' },
    { value: 28, name: '28G' },
    { value: 26, name: '26G' },
    { value: 24, name: '24G' },
    { value: 22, name: '22G' },
    { value: 20, name: '20G' },
    { value: 18, name: '18G' },
  ];
  const heights = range(10, 120);
  const widths = range(5, 96);
  const depths = range(5, 96);

  var initialValues = {
    height: 78,
    width: 36,
    depth: 15,
    sheet: 24,
    angle: 18,
  };

  const [values, setValues] = useState(initialValues);
  const [price, setPrice] = useState();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    var newValues = {
      ...values,
      [name]: value,
    }
    setValues(newValues);
    var newSum = parseInt(newValues.height, 10) + parseInt(newValues.width, 10)
    setPrice(newSum);
  };

  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

  return (
    <div className="container-fluid">
      <center><h1>Rack Calculator</h1></center>
      <div className="row">
        <div className="col-4">
          <div className="form-floating">
            <select onChange={handleInputChange} className="form-select" name="height" value={values.height}>
              {heights.map((e, key) => {
                return <option key={key} value={e}>{e}"</option>;
              })}
            </select>
            <label htmlFor="height">Height</label>
          </div>
        </div>

        <div className="col-4">
          <div className="form-floating">
            <select onChange={handleInputChange} className="form-select" name="width" value={values.width}>
              {widths.map((e, key) => {
                return <option key={key} value={e}>{e}"</option>;
              })}
            </select>
            <label htmlFor="width">Width</label>
          </div>
        </div>
        <div className="col-4">
          <div className="form-floating">
            <select onChange={handleInputChange} className="form-select" name="depth" value={values.depth}>
              {depths.map((e, key) => {
                return <option key={key} value={e}>{e}"</option>;
              })}
            </select>
            <label htmlFor="depth">Depth</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="form-floating">
            <select onChange={handleInputChange} className="form-select" name="angle" value={values.angle}>
              {angle_gauges.map((e, key) => {
                return <option key={key} value={e.value}>{e.name}</option>;
              })}
            </select>
            <label htmlFor="angle">Angle</label>
          </div>
        </div>
        <div className="col-6">
          <div className="form-floating">
            <select onChange={handleInputChange} className="form-select" name="sheet" value={values.sheet}>
              {sheet_gauges.map((e, key) => {
                return <option key={key} value={e.value}>{e.name}</option>;
              })}
            </select>
            <label htmlFor="sheet">Sheet</label>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Price:</th>
              <td>{price} ₹</td>
            </tr>
            <tr>
              <th scope="row">Angle:</th>
              <td>₹</td>
            </tr>
            <tr>
              <th scope="row">Shelf:</th>
              <td>₹</td>
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