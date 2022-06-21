import Image from "next/dist/client/image"
import SidebarMenuItem from "./SidebarMenuItem"

export default function Sidebar() {
  return (
    <div>
        {/* Twitter Logo */}
        <div>
            <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image>
        </div>

        {/* Menu */}

        <div>
            <div>
                <SidebarMenuItem />
            </div>
        </div>

        {/* Button*/}

        {/* Mini-Profile */}
    </div>
  )
}
