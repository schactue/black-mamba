import * as React from "react";
import MainLayout from "../layout/MainLayout";
import ProjectList from "../views/projectList";
import {ProjectDetails} from "../views/projectDetails";

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <ProjectList />
        },
        {
            path: '/project/:id',
            element: <ProjectDetails />
        },
    ]
};

export default MainRoutes;
