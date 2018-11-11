import React from 'react';

class AddressForm extends React.Component {
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit();
  }
  render() {
    const isEnabledBtn = this.props.street.length && this.props.building.length &&  this.props.postalCode.length;
    return (
      <form onSubmit={this.onFormSubmit}>
        <h2>{this.props.formName}</h2>
        <span>Step {this.props.step} of {this.props.finalStep}</span>
        <select
          name='city'
          onChange={this.props.onChange}
        >
          {
            this.props.cities.map(city => 
              <option key={city.id} value={city.id}>{city.name}</option>
            )
          }
        </select>
        <input
          type='text'
          name='street'
          placeholder='Enter street'
          value={this.props.street}
          onChange={this.props.onChange}
        />
        <input
          type='text'
          name='building'
          placeholder='Enter building'
          value={this.props.building}
          onChange={this.props.onChange}
        />
        <input
          type='text'
          name='postalCode'
          placeholder='Enter postal code'
          value={this.props.postalCode}
          onChange={this.props.onChange}
        />
        <button
          disabled={!isEnabledBtn}
        >
        Next
        </button>
      </form>
    );
  }
};

export default AddressForm;