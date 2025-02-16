import './SideBar.css';
import { MdOutlineChat } from "react-icons/md";
import { CgCircleci } from "react-icons/cg";
import { RiChatVoiceLine } from "react-icons/ri";

export function SideBar() {
    return(
        <div className='sideBar'>
            <MdOutlineChat />
            <CgCircleci />
            <RiChatVoiceLine />
        </div>
    )
}