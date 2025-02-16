import { SideBar } from './components/SideBar/SideBar';
import { ChatList } from './components/ChatsList/ChatList';
import { ShowChat } from './components/ShowChat/ShowChat';


export function App() {
  return (
    <div className='grid'>
      <SideBar/>
      <ChatList/>
      <ShowChat/>
    </div>
    
  )
}
