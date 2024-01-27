import { UiMainLayout } from "@gb-adviser/ui";
import { Outlet } from "react-router-dom";
import { Header } from "./main/Header.tsx";
import { Sidebar } from "./main/Sidebar.tsx";

export default function MainLayout() {
  return (
    <UiMainLayout header={<Header />} sidebar={<Sidebar />}>
      <Outlet />
    </UiMainLayout>
  );
}
