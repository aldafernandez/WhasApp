import './SideBar.css';
import { FaRegCommentAlt } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

export function SideBar() {
    return(
        <div className='sideBar'>
            <FaRegCommentAlt className='icon'/>
            <FaSpinner className='icon'/>
            <FaRegCommentDots className='icon'/>
            <FaUsers className='icon'/>
        </div>
    )
}