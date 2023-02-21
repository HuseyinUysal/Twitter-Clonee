import { NavLink } from "@remix-run/react";
import Feed from "../components/Feed"
import Widget from "../components/Widget"
import Sidebar from "../components/Sidebar";


export default function Index() {
  return (<div className="flex min-h-screen mx-auto">

      <Sidebar/>
    
    
      <Feed/>
      
    
      <Widget/>


    
    </div>
  );
}