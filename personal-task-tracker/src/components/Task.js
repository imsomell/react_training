import { FaTimesCircle } from 'react-icons/fa'
import { FaBell} from 'react-icons/fa'
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className='task-container'  onDoubleClick={() => onToggle(task.id)}>
            <div className={`${task.reminder ? 'reminder-on' : 'reminder-off'}`}>
            <FaBell style={{cursor: 'pointer' }} />
            </div>
            <div className='task'>
                <h3>{task.text}</h3>
                <p>{task.day}</p>
            </div>
            <div className='task-delete'>
            <FaTimesCircle style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
            </div>
        </div>
    )
}

export default Task
