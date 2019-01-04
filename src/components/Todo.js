import React from 'react';
import style from './TodoList.css';

const Todo =  props => props.list.map(task => (
		<li className={ style.task } key={ task.id }>{ task.text }
			<button className={ style.delete } key={ task.id } onClick={ () => props.remove(task.id) }>
				x
			</button>
		</li>
	)
);

export default Todo;