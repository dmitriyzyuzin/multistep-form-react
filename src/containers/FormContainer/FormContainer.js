import React from 'react';

import './FormContainer.css';
import UserForm from '../../components/UserForm';
import AddressForm from '../../components/AddressForm';

class FormContainer extends React.Component {
  state = {
    step: 1,
    name: '',
    email: '',
    city: 1,
    street: '',
    building: '',
    postalCode: '',
    citiesArr: []
  }
  NUMBER_OF_STEPS = 3
  onFieldChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }
  getUserInfoForm = () => {
    return (
      <UserForm
        formName='User Info Form'
        name={this.state.name}
        email={this.state.email}
        step={this.state.step}
        finalStep={this.NUMBER_OF_STEPS}
        onChange={this.onFieldChange}
        onSubmit={this.goNextStep}
      />
    );
  }
  getAddressForm = () => {
    return (
      <AddressForm
        formName='User Address Form'
        city={this.state.cityId}
        cities={this.state.citiesArr}
        street={this.state.street}
        building={this.state.building}
        postalCode={this.state.postalCode}
        step={this.state.step}
        finalStep={this.NUMBER_OF_STEPS}
        onChange={this.onFieldChange}
        onSubmit={this.goNextStep}
      />
    );
  }
  goNextStep = () => {
    if (this.state.step === this.NUMBER_OF_STEPS) {
      console.log('Submit...');
    } else {
      console.log('next form...');
      this.setState({
        step: this.state.step + 1
      });
    }
  }
  renderSwitch = step => {
    switch(step) {
      case 1:
        return this.getUserInfoForm();
      case 2:
        return this.getAddressForm();
      default:
        return this.getUserInfoForm();
    }
  }
  componentDidMount() {
    this.setState({
      citiesArr: [
        {'id': 1, 'name': 'Mocsow'},
        {'id': 2, 'name': 'St.Petersburg'},
        {'id': 3, 'name': 'Yekaterinburg'},
        {'id': 4, 'name': 'Kaliningrad'},
        {'id': 5, 'name': 'Samara'}
      ]
    });
  }
  render() {
    console.log('State is: ', this.state);
    return (
      <div>
        {
          this.renderSwitch(this.state.step)
        }
      </div>
    );
  }
};

export default FormContainer;