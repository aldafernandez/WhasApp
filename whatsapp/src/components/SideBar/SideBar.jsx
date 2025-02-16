import './SideBar.css';
import { MdOutlineMessage } from "react-icons/md";
import { CgCircleci } from "react-icons/cg";
import { RiChatVoiceFill } from "react-icons/ri";

export function SideBar() {
    return(
        <div className='sideBar'>
            <MdOutlineMessage />
            <CgCircleci />
            <RiChatVoiceFill />
        </div>
    )
}