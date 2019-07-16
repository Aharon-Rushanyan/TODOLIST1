import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ContextConsumer } from '../ContextApi/context';
function ToDo(props) {
    return (
        <div>
            {
                props.isonedit ?
                    <ContextConsumer>
                        {

                            ({ toDoList, deleteToDo, doneToDo }) => (

                                <div>
                                    <TextField
                                        style={props.style}
                                        disabled
                                        defaultValue={props.value}
                                        variant="outlined"
                                    />
                                    <Button color="secondary"
                                        style={{ left: '250px', top: '10px' }}
                                        onClick={() => deleteToDo(props.id)} >
                                        Delete
      </Button>
                                    <Button color="secondary"
                                        style={{ left: '250px', top: '10px' }}
                                        onClick={() => doneToDo(props.id)} >
                                        {props.name}
                                    </Button>
                                </div>
                            )
                        }
                    </ContextConsumer> :
                    
                    <ContextConsumer>
                        {

                            ({ toDoList, deleteToDo, doneToDo }) => (

                                <div>
                                    <TextField
                                        style={props.style}
                                        disabled
                                        defaultValue={props.value}
                                        variant="outlined"
                                    />

                                    <Button color="secondary"
                                        style={{ left: '250px', top: '10px' }}

                                    >
                                        {props.name}
                                    </Button>
                                </div>
                            )
                        }
                    </ContextConsumer>


            }
        </div>);
}



export default ToDo;