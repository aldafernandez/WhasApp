import './ChatList.css'; 
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaRegSquarePlus } from "react-icons/fa6";

export function ChatList(){
    return (
        <div className='chatList'>
            <div className='header'>   
                <h1 className='title'>Chats</h1>
                <div className='icons'>
                    <FaRegSquarePlus />
                    <FaEllipsisVertical />
                </div>
            </div>
            <p>input buscar</p>
            <div className='buttons'>
                <button className='button'>Todos</button>
                <button className='button'>No leídos</button>
                <button className='button'>Favoritos</button>
                <button className='button'>Grupos</button>
            </div>
            <Chats/>
        </div>
    )
} 