// UserTable.jsx
import "./styles/UserTable.scss";

const users = [
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone: "08078903721",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "Inactive",
  },
  {
    organization: "Irorun",
    username: "Debby Ogana",
    email: "debby@irorun.com",
    phone: "08160780928",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Pending",
  },
  {
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phone: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Blacklisted",
  },
  {
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phone: "07003309226",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Pending",
  },
  {
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phone: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Active",
  },
  {
    organization: "Lendstar",
    username: "Tosin Dokunmu",
    email: "tosin@lendstar.com",
    phone: "08060780900",
    dateJoined: "Apr 10, 2020 10:00 AM",
    status: "Active",
  },
  {
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phone: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Blacklisted",
  },
  {
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phone: "08060780900",
    dateJoined: "Apr 10, 2020 10:00 AM",
    status: "Inactive",
  },
  {
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phone: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Inactive",
  },
];

const UserTable = () => {
  return (
    <div className="user-table">
      <table>
        <thead>
          <tr>
            <th>Organization</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date Joined</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.dateJoined}</td>
              <td className={user.status.toLowerCase()}>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>Showing 100 out of 100</span>
        <div className="page-controls">
          <button>Previous</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <span>...</span>
          <button>16</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
