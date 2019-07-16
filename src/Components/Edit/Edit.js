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
            <ContextConsumer>
                {
                    ({ toDoList, addToDo }) => (
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
            </ContextConsumer>
        );

    }
}

export default Edit;