import React from 'react';

import './FormContainer.css';
import UserForm from '../../components/UserForm';

class FormContainer extends React.Component {
  state = {
    step: 1,
    name: '',
    email: '',
  }
  onFieldChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }
  getUserInfoForm = () => {
    return (
      <UserForm
        name={this.state.name}
        email={this.state.email}
        onChange={this.onFieldChange}
        onSubmit={this.goNextStep}
      />
    );
  }
  goNextStep = () => {
    const NUMBER_OF_STEPS = 3;
    if (this.state.step === NUMBER_OF_STEPS) {
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
      default:
        return this.getUserInfoForm();
    }
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