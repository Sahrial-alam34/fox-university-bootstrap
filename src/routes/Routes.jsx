import { createBrowserRouter } from "react-router-dom";


import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";

import CoursesPage from "../pages/CoursesPage/CoursesPage";
import StaffPage from "../pages/StaffPage/StaffPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>,
            loader:()=>fetch('/courses.json'),
            
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/courses',
          element:<CoursesPage></CoursesPage>,
          loader:()=>fetch('/courses.json')
        },
        {
          path: '/staff',
          element:<StaffPage></StaffPage>
        },
        {
          path:'/blog',
          element:<BlogPage></BlogPage>
        },
        {
          path:'/contact',
          element: <Contact></Contact>
        }

      ]
    },
  ]);

  export default router;