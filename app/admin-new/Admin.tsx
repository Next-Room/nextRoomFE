"use client";

import React, { useEffect } from "react";
import useCheckSignIn from "@/hooks/useCheckSignIn";
import Loader from "@/components/Loader/Loader";
import { getAdminCode, getShopName } from "@/utils/localStorage";
import { useSelectedTheme } from "@/components/atoms/selectedTheme.atom";
import { useGetThemeList } from "@/queries/getThemeList";
import { useToastInfo } from "@/components/atoms/toast.atom";
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
  const [toast, setToast] = useToastInfo();

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedTheme(categories[categories.length - 1]);
    }
  }, [categories, setSelectedTheme]);

  const handleClickSelected = (theme: Theme) => {
    setSelectedTheme(theme);
  };

  useEffect(() => {
    if (toast.isOpen) {
      setTimeout(() => {
        setToast({ ...toast, isOpen: false });
      }, 3000);
    }
  }, [toast]);

  const SidebarViewProps = {
    adminCode,
    shopName,
    categories,
    selectedTheme,
    handleClickSelected,
    isOpen: toast.isOpen,
  };

  if (!isLoggedIn) {
    return <Loader />;
  }

  return <AdminView {...SidebarViewProps} />;
}

export default Admin;
