import React from 'react';
import './SidebarGroup.css';

function SidebarGroup({ name, icon }) {
  return (
    <div className="sidebarGroup">
      <img src={icon || 'https://via.placeholder.com/30/ccc/fff?text=G'} alt={name} className="sidebarGroup__icon" />
      <span>{name}</span>
    </div>
  );
}

export default SidebarGroup;