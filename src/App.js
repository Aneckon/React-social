import './App.css';
import Header from './Components/Header/header';
import Newest from './Components/Newest/newest';
import Sidebar from './Components/Sidebar/sidebar';
import SidebarLatestNews from './Components/SidebarLatestNews/sidebarLatestNews';
import Profile from './Components/Profile/profile';
import Messages from './Components/Messages/messages';
import { BrowserRouter, Route } from 'react-router-dom'

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <SidebarLatestNews />
        <Route path='/profile' render={() => <Profile profileImg={props.state.profile.images} profileIcon={props.state.profile.icon} profilePost={props.state.profile.post} newsPost={props.newsPost}/> }/>
        <Route path='/messages' render={() => <Messages messagesData={props.state.messages.messagesData} messagesMessagData={props.state.messages.messagesMessagData}/>} />
        <Route path='/newest' render={() => <Newest NewsPostData={props.state.news.NewsPostData}/>} />
        {/* <Route path='/friends' render={() => <Friends/>} /> */}
        {/* <Route path='/settings' render={() => <Settings/>} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
