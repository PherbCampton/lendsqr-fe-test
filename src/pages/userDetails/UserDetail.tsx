import React, { useState } from "react";
import styles from "./UserDetails.module.scss";
import { AVATAR, EMPTYSTAR, FILLEDSTAR } from "../../constants/assets";

const UserDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState("generalDetails");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const UserTier: React.FC<{ tier: number }> = ({ tier }) => {
    return (
      <div>
        {[1, 2, 3].map((i) =>
          i <= tier ? (
            <img src={FILLEDSTAR} key={i} />
          ) : (
            <img src={EMPTYSTAR} key={i} />
          )
        )}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <button>Back</button>
        <h1>User Details</h1>
        <div className={styles.actions}>
          <button className="red">Blacklist User</button>
          <button className="teal">Activate User</button>
        </div>
      </div>

      {/* User Card */}
      <div className={styles.userCard}>
        <div className={styles.flex}>
          <div className={styles.avatar}>
            <img className={styles.avatar} src={AVATAR} alt="Grace Effiom" />
          </div>
          <div className={styles.details}>
            <div className={styles.name}>Grace Effiom</div>
            <div className={styles.id}>LSQFf587g90</div>
          </div>
          <div className={styles.details}>
            <div className={styles.tier}>User's Tier</div>
            <UserTier tier={2} />
          </div>
          <div className={styles.details}>
            <div className={styles.balance}>₦200,000.00</div>
            <div className={styles.accountDetails}>
              9912345678/Providus Bank
            </div>
          </div>
        </div>
        <div className={styles.tabList}>
          <div
            className={`${styles.tab} ${
              activeTab === "generalDetails" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("generalDetails")}
          >
            General Details
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "documents" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("documents")}
          >
            Documents
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "bankDetails" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("bankDetails")}
          >
            Bank Details
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "loans" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("loans")}
          >
            Loans
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "savings" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("savings")}
          >
            Savings
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "appAndSystem" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("appAndSystem")}
          >
            App and System
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabsWrapper}>
        <div className={styles.tabs}>
          <div
            className={`${styles.tabPanel} ${
              activeTab === "generalDetails" ? styles.active : ""
            }`}
          >
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Personal Information</div>
              <div className={styles.infoGrid5}>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Full Name:</div>
                  <div>Grace Effiom</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Phone Number:</div>
                  <div>07060780922</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Email Address:</div>
                  <div>grace@gmail.com</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>BVN:</div>
                  <div>07060780922</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Gender:</div>
                  <div>Female</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Marital Status:</div>
                  <div>Single</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Children:</div>
                  <div>None</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Type of Residence:</div>
                  <div>Parent's Apartment</div>
                </div>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>
                Education and Employment
              </div>
              <div className={styles.infoGrid4}>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Level of Education:</div>
                  <div>B.Sc</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Employment Status:</div>
                  <div>Employed</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Sector of Employment:</div>
                  <div>FinTech</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Duration of Employment:</div>
                  <div>2 years</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Office Email:</div>
                  <div>grace@lendsqr.com</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Monthly Income:</div>
                  <div>₦200,000.00 - ₦400,000.00</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Loan Repayment:</div>
                  <div>40,000</div>
                </div>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Socials</div>
              <div className={styles.infoGrid5}>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Twitter:</div>
                  <div>@grace_effiom</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Facebook:</div>
                  <div>Grace Effiom</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Instagram:</div>
                  <div>@grace_effiom</div>
                </div>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Guarantor</div>
              <div className={styles.infoGrid5}>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Full Name:</div>
                  <div>Debby Ogana</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Phone Number:</div>
                  <div>07060780922</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Email Address:</div>
                  <div>debby@gmail.com</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Relationship:</div>
                  <div>Sister</div>
                </div>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionSpace}></div>
              <div className={styles.infoGrid5}>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Full Name:</div>
                  <div>Debby Ogana</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Phone Number:</div>
                  <div>07060780922</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Email Address:</div>
                  <div>debby@gmail.com</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.label}>Relationship:</div>
                  <div>Sister</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.tabPanel} ${
              activeTab === "documents" ? styles.active : ""
            }`}
          >
            <p>Documents content goes here...</p>
          </div>
          <div
            className={`${styles.tabPanel} ${
              activeTab === "bankDetails" ? styles.active : ""
            }`}
          >
            <p>Bank Details content goes here...</p>
          </div>
          <div
            className={`${styles.tabPanel} ${
              activeTab === "loans" ? styles.active : ""
            }`}
          >
            <p>Loans content goes here...</p>
          </div>
          <div
            className={`${styles.tabPanel} ${
              activeTab === "savings" ? styles.active : ""
            }`}
          >
            <p>Savings content goes here...</p>
          </div>
          <div
            className={`${styles.tabPanel} ${
              activeTab === "appAndSystem" ? styles.active : ""
            }`}
          >
            <p>App and System content goes here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
