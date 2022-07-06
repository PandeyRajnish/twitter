import Image from "next/dist/client/image"
import SidebarMenuItem from "./SidebarMenuItem"
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HomeIcon, InboxIcon, UserIcon } from "@heroicons/react/outline"
import { HashtagIcon } from "@heroicons/react/outline"



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
          <SidebarMenuItem text="Home" Icon={HomeIcon} />
          <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
          <SidebarMenuItem text="Notifications" Icon={BellIcon} />
          <SidebarMenuItem text="Messages" Icon={InboxIcon} />
          <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
          <SidebarMenuItem text="Profile" Icon={UserIcon} />
          <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
        </div>
      </div>

      {/* Button*/}

        <button>Tweet</button>

      {/* Mini-Profile */}

        <div className="className">
          <img src="https://lh3.googleusercontent.com/a-/AOh14Gh9ukTDa6vSiRyYEmqtJZlfr2G0NuVx4ZQRcoITFQ=s96-c-rg-br100" alt="user-image" />
          <div className="className">
            <h4>Rajnish Kumar Pandey</h4>
            <p>@RajnishPandey97</p>
          </div>
          <DotsHorizontalIcon className="h-5" />
        </div>

    </div>
  )
}
