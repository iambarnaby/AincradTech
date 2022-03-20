import React, { FC, useState } from "react";
import ClassesPage from "./content/ClassesPage";
import DashboardPage from "./content/DashboardPage";
import ResourcesPage from "./content/ResourcesPage";

interface Props {
  content: string;
}

const AppContent = ({ content }: Props) => {
  const renderContent = (content: string) => {
    switch (content) {
      case "Dashboard":
        return <DashboardPage />;
        break;
      case "Classes":
        return <ClassesPage />;
        break;
      case "Resources":
        return <ResourcesPage />;
        break;
      default:
        break;
    }
  };
  return (
    <div className="relative h-100%  bg-[#F5F5FB]">
      <div>{renderContent(content)}</div>
    </div>
  );
};

export default AppContent;
