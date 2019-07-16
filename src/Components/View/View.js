import React from 'react';

import { ContextConsumer } from '../../ContextApi/context';
import ToDo from '../../Common/ToDo';
import { Link } from 'react-router-dom';

class View extends React.Component {

    render() {
   
        return (
            <ContextConsumer>
                {
                    ({ toDoList}) => (
                        <div><Link style={{ color: 'red', }} to='/edit' >GO TO EDIT</Link>
                        {
                    toDoList.map(toDo => <ToDo value={toDo.value} isonedit={0} id={toDo.id} key={toDo.id} style={toDo.style} name={toDo.name} />)
                }
   
                </div>
            )
        }
    </ContextConsumer>
);

}
}


export default View;