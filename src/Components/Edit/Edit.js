import React from 'react';

import MyContext, { ContextConsumer } from '../../ContextApi/context';
import ToDo from '../../Common/ToDo'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';


class Edit extends React.Component {
    state = {
        value: ''
    }

    static contextType = MyContext;

    onChange = event => this.setState({ value: event.target.value });

    render() {
        return (
            <div>
                {
                    <ContextConsumer>
                        {
                            ({ user }) => {

                                console.log(user);
                                return (user ?
                                    (<ContextConsumer>
                                        {
                                            ({ toDoList, addToDo, component, todoItems }) => (
                                                <div>

                                                    <Link to='/view' >GO TO view</Link>

                                                    <TextField
                                                        style={{ left: '250px' }}
                                                        required
                                                        label="TO DO"
                                                        margin="normal"
                                                        onChange={this.onChange}
                                                        value={this.state.value}
                                                    />

                                                    <Button
                                                        style={{ left: '250px', top: '28px' }}
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() => addToDo(this.state.value)}
                                                    >
                                                        Edit
                                </Button>
                                                    {
                                                        toDoList.map(toDo => <ToDo value={toDo.value} isonedit={1} id={toDo.id} key={toDo.id} style={toDo.style} name={toDo.name} />)
                                                    }


                                                </div>
                                            )
                                        }
                                    </ContextConsumer>)
                                    : <div>

                                        <img style={{ height: '40%', width: '40%' }}
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9_AMEswiK1HWrkeCvGQG8xAR-wGTITxFtR4uDTmVfpWix9nY" />
                                        <Link style={{ right: '200px' }} to='/login' >
                                            Try To Sign In</Link>
                                        <img style={{ height: '40%', width: '40%' }}
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9_AMEswiK1HWrkeCvGQG8xAR-wGTITxFtR4uDTmVfpWix9nY" />
                                    </div>)
                            }
                        }
                    </ContextConsumer>
                } </div>

        );

    }
}

export default Edit;