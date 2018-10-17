import React, {Component} from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const API = 'http://localhost:3000/api/todos';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: '', list: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

    this.refresh();
  };

  refresh() {
    axios.get(`${API}?sort=-createdAt`).then(res => {
      this.setState({...this.state, description: '', list: res.data});
    });
  };

  handleChange(e) {
    this.setState({...this.state, description: e.target.value})
  };

  handleAdd() {
    const description = this.state.description;
    axios.post(API, { description }).then(res => {
      this.refresh();
    })
  };

  handleRemove(todo) {
    axios.delete(`${API}/${todo._id}`).then(res => {
      this.refresh();
    });
  };

  render() {
    return (
      <div>
        <PageHeader name='Tasks' small='Create'></PageHeader>
        <TodoForm 
          description={this.state.description} 
          handleAdd={this.handleAdd}
          handleChange={this.handleChange} />
        <TodoList list={this.state.list} handleRemove={this.handleRemove} />
      </div>
    );
  };
};