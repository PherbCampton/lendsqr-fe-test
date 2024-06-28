import Header from "./Header";
import "./users.scss";
import Table from "./Table";

export const Users = () => {
  return (
    <div className="user-background">
      <div className="app">
        <Header />
        <Table />
      </div>
    </div>
  );
};
