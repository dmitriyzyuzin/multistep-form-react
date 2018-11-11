import React from 'react';

class UserForm extends React.Component {

  render() {
    return (
      <form>
        <input
          type='text'
          name='name'
          placeholder='Enter name'
          value={this.props.name}
          onChange={this.props.onChange}
        />
        <input
          type='text'
          name='email'
          placeholder='Enter email'
          value={this.props.email}
          onChange={this.props.onChange}
        />
        <button
          type='button'
          value='Next'
        />
      </form>
    );
  }
};

export default UserForm;