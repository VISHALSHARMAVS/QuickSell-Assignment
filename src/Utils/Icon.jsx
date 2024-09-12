import Backlog from '../assets/Backlog.svg';
import Todo from '../assets/To-do.svg'
import Menu from '../assets/menu.svg';
import Progress from '../assets/in-progress.svg';
import Done from '../assets/Done.svg';
import Cancelled from '../assets/Cancelled.svg';
import Urgent from '../assets/Urgent-colour.svg'
import Signal3 from '../assets/signal3.svg'
import Signal2 from '../assets/signal2.svg'
import Signal1  from '../assets/signal1.svg'


export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <img src={Menu} alt="" />;
        case "Low": return <img src={Signal1} alt="" />;
        case "Medium": return <img src={Signal2} alt="" />;
        case "High": return <img src={Signal3} alt="" />;
        case "Urgent": return <img src={Urgent} alt="" />;
        default: return <img src={Cancelled}/>;
    }
};

export const getStatusIcon = (status) => {
    switch (status) {
        case "Backlog": return <img src={Backlog} alt="" />;
        case "Todo": return <img src={Todo} alt="" />;
        case "In progress": return <img src={Progress}/>;
        case "Done": return <img src={Done} alt="" />;
        case "Canceled": return <img src={Cancelled} alt="" />;
        default: return <img src={Cancelled} alt="" />;
    }
};
