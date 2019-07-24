import React from 'react';
import uuid from 'uuid';

import { ContextProvider } from './ContextApi/context';

import Edit from './Components/Edit/Edit';
import View from './Components/View/View';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';

import Signup from '../src/signup/Signup'
import Login from '../src/Login'
import Size from '../src/size/Size'
class ToDoList extends React.Component {
    state = {
        user: null,
        changeUser: hel => { this.setState({ user: hel }, console.error('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')) },
        toDoList: [],
        todoItems: [],
        users: [],
        addToDo: value => {
            const toDoListX = this.state.toDoList;

            toDoListX.push({
                id: uuid(),
                isDone: false,
                name: 'status: Not Done',
                style: { left: '250px', background: '#00FEED' },
                value
            });
            let x = toDoListX[(toDoListX.length - 1)].id;
            const db = firebase.firestore();
            const todoItemsRef = db.collection("list").doc(x);

            todoItemsRef.set({

                isDone: false,
                name: 'status: Not Done',
                style: { left: '250px', background: '#00FEED' },
                value
            })
            this.setState({ toDoList: toDoListX });
        },

        deleteToDo: id => {
            const toDoList = [];

            this.state.toDoList.map(toDo => id !== toDo.id && toDoList.push(toDo));

            const db = firebase.firestore();
            const todoItemsRef = db.collection("list").doc(id);
            todoItemsRef.delete();
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
            const db = firebase.firestore();
            const todoItemsRef = db.collection("list").doc(id);
            this.state.toDoList.map(toDo => {
                if (id !== toDo.id) {
                    toDoList.push(toDo)
                }
                else if (toDo.isDone) {
                    toDoList.push({
                        id: toDo.id, isDone: !toDo.isDone, value: toDo.value,
                        style: { left: '250px', background: '#00FEED', }, name: 'Status:Not Done',
                    });
                    todoItemsRef.set({
                        id: toDo.id, isDone: !toDo.isDone, value: toDo.value,
                        style: { left: '250px', background: '#00FEED', }, name: 'Status:Not Done',
                    })
//////////aaaaaaaagit pull origin master
                } else if (!toDo.isDone) {
                    toDoList.push({
                        id: toDo.id, isDone: !toDo.isDone, value: toDo.value,
                        style: { left: '250px', background: '#BCFF33', }, name: 'Status:Done',
                    });
                    todoItemsRef.set({
                        id: toDo.id, isDone: !toDo.isDone, value: toDo.value,
                        style: { left: '250px', background: '#BCFF33', }, name: 'Status:Done',
                    })
                }
                this.setState({ toDoList })

            });
        }
    }

    componentDidMount() {
        const db = firebase.firestore();
        const todoItemsRef = db.collection("list");
        todoItemsRef.get().then(querySnapshot => {
            const toDoList = [];
            querySnapshot.forEach(doc => {
                const todo = {
                    name: doc.data().name,
                    isDone: doc.data().isDone,
                    id: doc.id,
                    value: doc.data().value,
                    style: doc.data().style,
                };
                toDoList.push(todo);

            });

            this.setState({ toDoList })
        });

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
                            path='/login'
                            component={() => <Login />}
                        />
                        <Route
                            exact
                            path='/signup'
                            component={() => <Signup />}
                        />
                          <Route
                            exact
                            path='/size'
                            component={() => <Size />}
                        />
                        <Route
                            exact
                            render={() => <h1>404 Page Not Found</h1>}
                        />

                    </Switch>
                </Router>
            </ContextProvider >

        </div>
        );
    }
}

export default ToDoList;