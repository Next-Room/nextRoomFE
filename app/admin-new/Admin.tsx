"use client";

import React, { useEffect } from "react";
import useCheckSignIn from "@/hooks/useCheckSignIn";
import Loader from "@/components/Loader/Loader";
import { getAdminCode, getShopName } from "@/utils/localStorage";
import { useSelectedTheme } from "@/components/atoms/selectedTheme.atom";
import { useGetThemeList } from "@/queries/getThemeList";
import AdminView from "./AdminView";

type Theme = {
  id: number;
  title: string;
  timeLimit: number;
  hintLimit: number;
};

function Admin() {
  const { data: categories = [] } = useGetThemeList();

  const isLoggedIn = useCheckSignIn();

  const [selectedTheme, setSelectedTheme] = useSelectedTheme();
  const adminCode: string = getAdminCode() || ""; 
  const shopName: string = getShopName() || "";

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedTheme(categories[categories.length - 1]);
    }
  }, [categories, setSelectedTheme]);

  const handleClickSelected = (theme: Theme) => {
    setSelectedTheme(theme);
  };


  const SidebarViewProps = {
    adminCode,
    shopName,
    categories,
    selectedTheme,
    handleClickSelected,
  };

  if (!isLoggedIn) {
    return <Loader />;
  }

  return <AdminView {...SidebarViewProps} />;
}

export default Admin;
