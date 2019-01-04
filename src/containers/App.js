import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';
import { hot } from 'react-hot-loader';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					id: 1,
					text: 'Clean room'
				},
				{
					id: 2,
					text: 'Wash the dishes'
				},
				{
					id: 3,
					text: 'Feed my cat'
				},
				{
					id: 4,
					text: 'Cook lunch'
				}		
			]
		};
	};
	/* Dodawanie kolejnych zadan do listy, aktualizujac tablice o jeden dodatkowy element */
	addTodo(val) {
		const todo = {
			text: val,
			id: uuid.v4(),
		};
		const data = [...this.state.data, todo];
		this.setState({ data });
	};
	/* Usuwanie pojedynczego elementu z listy, korzystajac z odfiltrowania reszty zadan */  
	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({ data: remainder });
	};
	
	render() {
		return (
			<div className={ style.TodoApp }>
				<Title title={ this.state.data.length }/>
				<Todo list={ this.state.data } remove={ this.removeTodo.bind(this) } />
				<TodoForm add={ this.addTodo.bind(this) } />
			</div>
		);
	};
};

export default hot(module)(App);