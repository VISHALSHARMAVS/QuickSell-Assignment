/* eslint-disable react/prop-types */
import  { useMemo } from 'react';
import Card from './Card';
import "./Column.css";
import Add from '../assets/add.svg';
import Menu from '../assets/menu.svg';
import { getPriorityIcon, getStatusIcon } from '../Utils/Icon';
import UserIcon from './Icon';

function Column({ tickets, grouping, groupBy, userIdToData }) {
  
  const title = useMemo(() => {
    if (grouping === "status") return groupBy;
    if (grouping === "priority") return groupBy;
    if (grouping === "user") return userIdToData[groupBy].name;
  }, [grouping, groupBy, userIdToData]);

  const icon = useMemo(() => {
    if (grouping === "status") return getStatusIcon(groupBy);
    if (grouping === "priority") return getPriorityIcon(groupBy);
    if (grouping === "user") return <UserIcon name={userIdToData[groupBy].name} available={userIdToData[groupBy].available} />;
  }, [grouping, groupBy, userIdToData]);

  return (
    <div className='column'>
      <div className='column-header'>
        <div className='column-header-left-container'>
          {icon}
          <div className='column-title'>
            {title}
            <span className='count'>{tickets.length}</span>
          </div>
        </div>
        <div className='column-header-right-container'>
          <img src={Add} alt="" />
       <img src={Menu} alt="" />
        </div>
      </div>
      <div className='cards-container'>
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            userData={userIdToData[ticket.userId]}
            hideStatusIcon={grouping === "status"}
            hideProfileIcon={grouping === "user"}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
