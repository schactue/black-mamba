import * as React from "react";
import MainLayout from "../layout/MainLayout";
import ProjectList from "../views/projectList";

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <ProjectList />
        },
    ]
};

export default MainRoutes;
