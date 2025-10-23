import React from "react";
import { FaUsers } from "react-icons/fa"; 
import "./SidebarGroup.css";

export default function SidebarGroup({ name, icon, IconComponent }) {
  const defaultImage =
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a6b8b0d2c1a3ea9f4f3d3dc6a0d9e5f";

  return (
    <div className="sidebarGroup">
      <div className="sidebarGroup__media">
        {icon ? (
          <img
            src={icon}
            alt={name}
            className="sidebarGroup__iconImg"
            onError={(e) => {
              e.currentTarget.src = defaultImage; 
            }}
          />
        ) : IconComponent ? (
          <div className="sidebarGroup__iconWrap">
            <IconComponent className="sidebarGroup__iconSvg" />
          </div>
        ) : (
          <img src={defaultImage} alt={name} className="sidebarGroup__iconImg" />
        )}
      </div>

      <div className="sidebarGroup__label">{name}</div>
    </div>
  );
}
