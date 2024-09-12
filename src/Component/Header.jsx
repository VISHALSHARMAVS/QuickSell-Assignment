/* eslint-disable react/prop-types */

import './Header.css';
import DisplayDropdown from './Dropdown';

function Header({ grouping, setGrouping, ordering, setOrdering }) {
    return (
        <header>
            <DisplayDropdown 
                grouping={grouping} 
                setGrouping={setGrouping} 
                ordering={ordering} 
                setOrdering={setOrdering} 
            />
        </header>
    );
}

export default Header;
