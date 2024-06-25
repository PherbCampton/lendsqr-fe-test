import { SetStateAction, useState } from "react";
import {
  ORGICON,
  USERICON,
  LOANICON,
  FEESICON,
  PREFICON,
  AUDITICON,
  DROPDICON,
  TRANCICON,
  KARMAICON,
  DASHBICON,
  REPORTICON,
  LAONRQICON,
  WISHLSTICON,
  FEESPRICICON,
  SERVICESICON,
  DECISIONICON,
  SETTLEMNTICON,
  SAVINGPDTICON,
  GUARANTORICON,
  PIGYSAVINGICON,
  SERVICESACCICON,
} from "../../constants/assets";

import "./NavMenu.scss";

type MenuItemProps = {
  icon: string;
  label: string;
  activeMenu: string;
  onClick: (menu: string) => void;
};

const MenuItem = ({ label, icon, activeMenu, onClick }: MenuItemProps) => {
  return (
    <div
      className={`menu-item ${activeMenu === label ? "active" : ""}`}
      onClick={() => onClick(label)}
    >
      <img src={icon} alt={label} className="icon" />
      {label}
    </div>
  );
};

export const NavMenu = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleMenuClick = (menu: SetStateAction<string>) => {
    setActiveMenu(menu);
  };

  const sections = [
    {
      title: null,
      items: [
        {
          label: "Switch Organization",
          icon: ORGICON,
          dropdown: DROPDICON,
        },
        { label: "Dashboard", icon: DASHBICON },
      ],
    },
    {
      title: "CUSTOMERS",
      items: [
        { label: "Users", icon: USERICON },
        { label: "Guarantors", icon: GUARANTORICON },
        { label: "Loans", icon: LOANICON },
        { label: "Decision Models", icon: DECISIONICON },
        { label: "Savings", icon: PIGYSAVINGICON },
        { label: "Loan Requests", icon: LAONRQICON },
        { label: "Whitelist", icon: WISHLSTICON },
        { label: "Karma", icon: KARMAICON },
      ],
    },
    {
      title: "BUSINESSES",
      items: [
        { label: "Organization", icon: ORGICON },
        { label: "Loan Products", icon: LAONRQICON },
        { label: "Saving Products", icon: SAVINGPDTICON },
        { label: "Fees and Charges", icon: FEESICON },
        { label: "Transactions", icon: TRANCICON },
        { label: "Services", icon: SERVICESICON },
        { label: "Service Account", icon: SERVICESACCICON },
        { label: "Settlements", icon: SETTLEMNTICON },
        { label: "Reports", icon: REPORTICON },
      ],
    },
    {
      title: "SETTINGS",
      items: [
        { label: "Preferences", icon: PREFICON },
        { label: "Fees and Pricing", icon: FEESPRICICON },
        { label: "Audit Logs", icon: AUDITICON },
      ],
    },
  ];

  return (
    <div className="nav-menu">
      {sections.map((section, sectionIndex) => (
        <div className="section" key={sectionIndex}>
          {section.title && (
            <div className="section-title">{section.title}</div>
          )}
          {section.items.map((item, itemIndex) => (
            <div
              className={`${
                item.label === "Switch Organization" && "organization"
              }`}
              key={itemIndex}
            >
              <MenuItem
                label={item.label}
                icon={item.icon}
                activeMenu={activeMenu}
                onClick={handleMenuClick}
              />
              {item.label === "Switch Organization" && (
                <img src={DROPDICON} alt="dropdown" className="dropdown" />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
