import React, {Component} from 'react';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: '', list: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  };

  handleChange(e) {
    this.setState({...this.state, description: e.target.value})
  };

  handleAdd() {
    console.log(this.state.description);
  };

  render() {
    return (
      <div>
        <PageHeader name='Tasks' small='Create'></PageHeader>
        <TodoForm 
          description={this.state.description} 
          handleAdd={this.handleAdd}
          handleChange={this.handleChange} />
        <TodoList />
      </div>
    );
  };
};