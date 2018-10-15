import React, {Component} from 'react';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';

export default class Todo extends Component {
  render() {
    return (
      <div>
        <PageHeader name='Tasks' small='Create'></PageHeader>
        <TodoForm />
      </div>
    );
  }
};