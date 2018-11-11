import React from 'react';

class UserForm extends React.Component {
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit();
  }
  render() {
    const isEnabledBtn = this.props.name.length && this.props.email.length;
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Enter name'
          value={this.props.name}
          onChange={this.props.onChange}
        />
        <input
          type='email'
          name='email'
          placeholder='Enter email'
          value={this.props.email}
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

export default UserForm;