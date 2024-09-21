import React from "react";
import "./admin.modules.sass";
import Sidebar from "@/admin-new/(components)/Sidebar";
import ContentArea from "@/admin-new/(components)/ContentArea";

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
      <ContentArea />
    </div>
  );
}

export default AdminView;
