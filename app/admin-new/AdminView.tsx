import React from "react";
import "./admin.css";
import { NewTextField } from "@/signup/NewTextField.component";
import Sidebar from "@/admin-new/(components)/Sidebar";

interface Theme {
  id: number;
  title: string;
  timeLimit: number;
  hintLimit: number;
}

interface Props {
  adminCode: string;
  shopName: string;
  categories: Theme[];
  selectedTheme: Theme;
  handleClickSelected: (theme: Theme) => void;
}

function AdminView(props: Props) {
  return (
    <div className="main">
      <Sidebar {...props} />
      <div className="content-area">
        <NewTextField />
      </div>
    </div>
  );
}

export default AdminView;
