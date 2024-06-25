import React from "react";
import {
  USERS,
  ACTIVEUSERSWITHLOAN,
  USERSWITHLOANS,
  USERSWITHSAVINGS,
} from "../../constants/assets";
import "./styles/header.scss";

const Metric = ({ icon, altText, label, value }) => {
  return (
    <div className="metric">
      <img src={icon} alt={altText} />
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  );
};

const Header = () => {
  const metrics = [
    { icon: USERS, altText: "usersIcon", label: "Users", value: "2,453" },
    {
      icon: ACTIVEUSERSWITHLOAN,
      altText: "active users",
      label: "Active Users",
      value: "2,453",
    },
    {
      icon: USERSWITHLOANS,
      altText: "user with loans",
      label: "Users with Loans",
      value: "12,453",
    },
    {
      icon: USERSWITHSAVINGS,
      altText: "user with savings",
      label: "Users with Savings",
      value: "102,453",
    },
  ];

  return (
    <div className="header">
      {metrics.map((metric, index) => (
        <Metric
          key={index}
          icon={metric.icon}
          altText={metric.altText}
          label={metric.label}
          value={metric.value}
        />
      ))}
    </div>
  );
};

export default Header;
