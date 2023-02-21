import { NavLink } from "@remix-run/react";
import Feed from "../components/Feed"
import Widget from "../components/Widget"
import SideBar from "../components/Sidebar";


export default function Index() {
  return (
  <div className="flex min-h-screen max-w-7xl mx-auto ">
    
        <SideBar/>
    
        <Feed/>
    
        <Widget/>
    </div>
  );
}