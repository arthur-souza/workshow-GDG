import React from "react";

export class FormTodo extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.props.onChange}
            value={this.props.value}
          />
          <button>Adicionar</button>
        </form>
    );
  }
}