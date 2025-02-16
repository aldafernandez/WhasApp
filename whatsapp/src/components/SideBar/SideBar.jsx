import './SideBar.css';
import { MdOutlineChat } from "react-icons/md";
import { LuCircleDotDashed } from "react-icons/lu";
import { RiChatVoiceLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

export function SideBar() {
    return(
        <div className='sideBar'>
            <MdOutlineChat />
            <LuCircleDotDashed />
            <RiChatVoiceLine />
            <FaUsers />
        </div>
    )
}