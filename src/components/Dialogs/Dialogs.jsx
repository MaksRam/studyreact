import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';







const Dialogs = (props) => {

let photos = [
    {id:1, src: 'https://sun9-82.userapi.com/s/v1/ig2/LzdXBvepHf6uCUqG7uyxRc0m3z9YyfLBArt9gBvgS0kwKnfbS2Ff-L_JL_MXfeoS5pFOJfPBEM5Yu5xL5VXXelUG.jpg?size=200x200&quality=96&crop=86,0,846,846&ava=1'},
    {id:2, src: 'https://cdn20.pamono.com/p/g/1/2/1221271_80mhj02mx6/globe-from-schottes-erd-globus-berlin-early-20th-century-1.jpg'}
]




let dialogsElements = props.golovka.dialogs.map (d =><DialogItem name={d.name} id={d.id}/>);
let messagesElements = props.golovka.messages.map (m =><Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
      
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
            {messagesElements}
            </div>
        </div>
    )

}

export default Dialogs;