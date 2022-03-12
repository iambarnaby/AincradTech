import React, { FC, useState } from "react";
import ClassesPage from "./ContentComponents/ClassesPage";
import DashboardPage from "./ContentComponents/DashboardPage";
import ResourcesPage from "./ContentComponents/ResourcesPage";

interface AppContentProps {
  content: string;
}

const AppContent = (content: AppContentProps) => {
  const renderContent = (content: string) => {
    switch (content) {
      case "dashboardButton":
        return <DashboardPage />;
        break;
      case "classesButton":
        return <ClassesPage />;
        break;
      case "resourcesButton":
        return <ResourcesPage />;
        break;
      default:
        break;
    }
  };
  return (
    <div className="relative h-100%  bg-[#F5F5FB]">
      <div>{renderContent(content.content)}</div>
    </div>
  );
};

export default AppContent;
