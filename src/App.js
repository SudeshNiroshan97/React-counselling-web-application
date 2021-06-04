import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Session from 'react-session-api';
import './App.css';
import Footer from './components/layout/footer/footer';
import ExtendNav from './components/layout/navigation/extend-nav';
import Navigation from './components/layout/navigation/navigation';
import ScrollUp from './components/plugins/buttons/button-scroll-up';
// import ChatBot from './components/plugins/chatbot/chatbot';
import ChatBot from 'react-chatbot-kit';
import Login from './components/plugins/popups/login';
import About from './components/routes/about';
import Blog from './components/routes/blog';
import Contact from './components/routes/contact';
import Experts from './components/routes/experts';
import AppointmentExpert from './components/routes/forms/appointment_expert';
import PaymentForm from './components/routes/forms/payment_gate';
import Home from './components/routes/home';
import ShareSpace from './components/routes/share_space';
import Test from './components/routes/test';
import Profile from './components/routes/user-profile';
import EventEmitter from './utils/EventEmitter';
import navitem_service from './services/navitems_service';
import { errors_list } from './values/content';
import BlogSingle from './components/routes/single/blog-single';
import config from './components/plugins/chatbot-v2/config';
import ActionProvider from './components/plugins/chatbot-v2/ActionProvider';
import MessageParser from './components/plugins/chatbot-v2/MessageParser';

function App() {

  var [items, setItems] = useState([]);

  useEffect(() => {
    const onCloseLogPannel = () => {
        showLogin(!log_panel);
    }
    const onSwapPannel = () => {
      swapPannel(!swap_pannel);
    }
    const onShowChatbot = () => {
      showChatbot(!chatbot_pannel);
    }

    const onExNav = () => {
      setExNav(!exnav);
    }

    const listner = EventEmitter.addListener("closePannel", onCloseLogPannel);
    const listner2 = EventEmitter.addListener("swapPannel", onSwapPannel);
    const listner3 = EventEmitter.addListener("chatbot", onShowChatbot);
    const listner4 = EventEmitter.addListener("extendnav", onExNav);

    const loadResourcee = async () => {
        setItems(await navitem_service.getItems());
    }
    window.addEventListener('load', loadResourcee);

    return () => {
      listner.remove();
      listner2.remove();
      listner3.remove();
      listner4.remove();
    }
  })

  const [log_panel, showLogin] = useState(false);

  const [swap_pannel, swapPannel] = useState(true);

  const [chatbot_pannel, showChatbot] = useState(false);

  const [exnav, setExNav] = useState(false);

  // const handleLogPannel = () => {
  //   // handle with Timer and Session Availability
  //   // showLogin(!log_panel);
  // }


  return (
    <div className="App">
      
      <Router>
        <Navigation/>

        {
          exnav?<ExtendNav/>:<></>
        }
        
        
        {
          log_panel?<Login formSwap={swap_pannel}/>:<></>
        }
        
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/experts' exact component={Experts}/>
          <Route path='/experts/appointment' exact >
            {Session.get('username')?<AppointmentExpert />:<Redirect to="/experts"/>}
          </Route>
          <Route path='/experts/appointment/payment' exact >
            {Session.get('username')?<PaymentForm />:<Redirect to="/experts"/>}
          </Route>
          <Route path='/share' component={ShareSpace}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/about' exact component={About}/>
          <Route path='/contact' exact component={Contact}/>
          <Route path='/profile' component={Profile}>{Session.get('username')?<Profile />:<Redirect to="/"/>}</Route>

          {
            items.length > 0? items.map((element)=><Route path={`/${element.url}`} exact component={()=><BlogSingle content={element}/>}/>):<></>
          }
          <Route path='/error' exact component={()=><Test error={errors_list[5]}/>}/>
          <Route path='*' exact component={()=><Test error={errors_list[3]}/>}/>
          
          {/* <Route path='/**' /> */}
        </Switch>

        {
          chatbot_pannel?<div className="msg-box"><ChatBot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/></div>:<></>
        }
        
        <ScrollUp/>
        <Footer/>
      </Router>
      
      
      
      
    </div>
  );
}

export default App;
