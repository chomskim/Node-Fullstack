import React, { Component } from "react";
import { FormValidator } from "./FormValidator";
import { ValidationMessage } from "./ValidationMessage";
import { ValidateForm } from "./wholeFormValidation";

export class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bob",
      flavor: "Vanilla",
      toppings: ["Strawberries"],
      flavor2: "Vanilla",
      twoScoops: false,
      toppings2: ["Strawberries"],
      order: "",
      email: "",
      emailConfirm: "",
      terms: false,
    }
    this.rules = {
      name: { required: true, minlength: 3, alpha: true },
      email: { required: true, email: true, equals: "emailConfirm" },
      emailConfirm: { required: true, email: true, equals: "email" },
      order: { required: true },
      terms: { true: true },
    }
    this.flavors = [
      "Chocolate",
      "Double Chocolate",
      "Triple Chocolate",
      "Vanilla",
    ];
    this.toppings = [
      "Sprinkles",
      "Fudge Sauce",
      "Strawberries",
      "Maple Syrup",
    ];
  }

  updateFormValue = (event) => {
    this.setState({ [event.target.name]: event.target.value },
      () => this.props.submit(this.state));
  }

  updateFormValueOptions = (event) => {
    let options = [...event.target.options]
      .filter(o => o.selected)
      .map(o => o.value);
    this.setState({ [event.target.name]: options },
      () => this.props.submit(this.state));
  }

  updateFormValueCheck = (event) => {
    this.setState({ [event.target.name]: event.target.checked },
      () => this.props.submit(this.state));
  }

  updateFormValueCheck2 = (event) => {
    event.persist();
    this.setState(state => {
      if (event.target.checked) {
        state.toppings2.push(event.target.name);
      } else {
        let index = state.toppings2.indexOf(event.target.name);
        state.toppings2.splice(index, 1);
      }
    }, () => this.props.submit(this.state));
  }

  updateFormValue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="h5 bg-info text-white p-2">
        <FormValidator data={this.state} rules={this.rules}
          submit={this.props.submit}
          validateForm={ValidateForm}>
          <ValidationMessage field="form" />
          <div className="form-group">
            <label>Name</label>
            <input className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.updateFormValue} />
            <ValidationMessage field="name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.updateFormValue} />
            <ValidationMessage field="email" />
          </div>
          <div className="form-group">
            <label>Confirm Email</label>
            <input className="form-control"
              name="emailConfirm"
              value={this.state.emailConfirm}
              onChange={this.updateFormValue} />
            <ValidationMessage field="emailConfirm" />
          </div>
          <div className="form-group">
            <label>Order</label>
            <textarea className="form-control"
              name="order"
              value={this.state.order}
              onChange={this.updateFormValue} />
            <ValidationMessage field="order" />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input"
                type="checkbox" name="terms"
                checked={this.state.terms}
                onChange={this.updateFormValueCheck} />
              <label className="form-check-label">
                Agree to terms
              </label>
            </div>
            <ValidationMessage field="terms" />
          </div>
        </FormValidator>
        <div className="form-group">
          <label>Ice Cream Flavors</label>
          <select className="form-control"
            name="flavor" value={this.state.flavor}
            onChange={this.updateFormValue} >
            {this.flavors.map(flavor =>
              <option value={flavor} key={flavor}>
                {flavor}
              </option>
            )}
          </select>
        </div>
        <div className="form-group">
          <label>Ice Cream Toppings</label>
          <select className="form-control" multiple={true}
            name="toppings" value={this.state.toppings}
            onChange={this.updateFormValueOptions}>
            {this.toppings.map(top =>
              <option value={top} key={top}>
                {top}
              </option>
            )}
          </select>
        </div>
        <div className="form-group">
          <label>Ice Cream Flavors2</label>
          {this.flavors.map(flavor =>
            <div className="form-check" key={flavor}>
              <input className="form-check-input"
                type="radio" name="flavor2"
                value={flavor}
                checked={this.state.flavor2 === flavor}
                onChange={this.updateFormValue} />
              <label className="form-check-label">
                {flavor}
              </label>
            </div>
          )}
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input"
              type="checkbox" name="twoScoops"
              checked={this.state.twoScoops}
              onChange={this.updateFormValueCheck} />
            <label className="form-check-label">Two Scoops</label>
          </div>
        </div>
        <div className="form-group">
          <label>Ice Cream Toppings</label>
          {this.toppings.map(top => (
            <div className="form-check" key={top}>
              <input className="form-check-input"
                type="checkbox" name={top}
                value={this.state[top]}
                checked={this.state.toppings2.indexOf(top) > -1}
                onChange={this.updateFormValueCheck2} />
              <label className="form-check-label">{top}</label>
            </div>
          )
          )}
        </div>
      </div>
    )
  }
}
