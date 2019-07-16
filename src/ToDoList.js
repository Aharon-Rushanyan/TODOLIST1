import React from 'react';
import uuid from 'uuid';

import { ContextProvider } from './ContextApi/context';

import Edit from './Components/Edit/Edit';
import View from './Components/View/View';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class ToDoList extends React.Component {
    state = {
        toDoList: [],


        addToDo: value => {
            const toDoListX = this.state.toDoList;

            toDoListX.push({
                id: uuid(),
                isDone: false,
                name: 'status: Not Done',
                style: { left: '250px', background: '#00FEED' },
                value
            });

            this.setState({ toDoList: toDoListX });
        },
        deleteToDo: id => {
            const toDoList = [];

            this.state.toDoList.map(toDo => id !== toDo.id && toDoList.push(toDo));

            this.setState({ toDoList });
        },

        editToDo: (value, id) => {
            const toDoList = [];

            this.state.toDoList.map(toDo => id !== toDo.id ?
                toDoList.push(toDo) :
                toDoList.push({ id: toDo.id, isDone: toDo.isDone, value }));

            this.setState({ toDoList });
        },


        doneToDo: id => {
            const toDoList = [];

            this.state.toDoList.map(toDo => id !== toDo.id ?
                toDoList.push(toDo) : toDo.isDone ?
                    toDoList.push({ id: toDo.id, isDone: !toDo.isDone, value: toDo.value, style: { left: '250px', background: '#00FEED', }, name: 'Status:Not Done', }) :
                    toDoList.push({ id: toDo.id, isDone: !toDo.isDone, value: toDo.value, style: { left: '250px', background: '#BCFF33', }, name: 'Status:Done', }));

            this.setState({ toDoList });
        }
    }

    render() {
        return (<div>
            <ContextProvider value={this.state}>
            <Router>
                    <Switch>
                        <Route
                            exact
                            path='/edit'
                            component={() => <Edit />}
                        />
                        <Route
                            exact
                            path='/view'
                            component={() => <View />}
                        />
                        <Route
                            exact
                            render={() => <h1>Page Not Found</h1>}
                        />
                    </Switch>
                </Router>
            </ContextProvider >
     
        </div>
        );
    }
}

export default ToDoList;