import { NavLink } from "@remix-run/react";
import Feed from "../components/Feed"
import Widget from "../components/Widget"
import SideBar from "../components/SideBar";


export default function Index() {
  return (
  <div className="flex min-h-screen max-w-7xl mx-auto  justify-center grid-cols-3">
    <div className=" grid grid-cols-3 divide-x ">
      <div className="sticky top-0 z-10   h-16    ">
        <SideBar/>
    </div>
    
    <div>
      <Feed/>
      
    </div>
    <div className="sticky top-0 z-10   h-16">
      <Widget/>


    </div>
    </div>
    </div>
  );
}