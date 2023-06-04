import { createBrowserRouter } from "react-router-dom";


import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";

import CoursesPage from "../pages/CoursesPage/CoursesPage";

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
        }
      ]
    },
  ]);

  export default router;