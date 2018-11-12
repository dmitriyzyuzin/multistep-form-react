import React from 'react';

class AdditionalInfo extends React.Component {
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit();
  }
  render() {
    const isEnabledBtn = this.props.company.length && this.props.position.length;
    return (
      <form onSubmit={this.onFormSubmit}>
        <h2>{this.props.formName}</h2>
        <span>Step {this.props.step} of {this.props.finalStep}</span>
        <input
          type='text'
          name='company'
          placeholder='Company name'
          value={this.props.company}
          onChange={this.props.onChange}
        />
        <input
          type='text'
          name='position'
          placeholder='Position'
          value={this.props.position}
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

export default AdditionalInfo;