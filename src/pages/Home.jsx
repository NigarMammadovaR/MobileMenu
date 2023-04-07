import background from "../styles/images/Rectangle 1.png";
import user from "../styles/images/Ellipse 1.png";
import hamb from "../styles/images/Group 2.png";
import flower from "../styles/images/flowers-floral-background-lilies-white-600w-1276087156-transformed 1.png";
import lilia from "../styles/images/image 1.png";
import "@fontsource/inter";
import { useState } from "react";


const Home = () => {

const [showMenu, setShowMenu] = useState (false);
const [isActive, setActive] = useState(false);

const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
    <header>
         <div className="container">
        <nav className="nav">
            <ul className="left-top">
                <li><img src={background} alt="" /></li>
                <li className="text">
                    <p>Welcome to your personal</p>
                    <span>MBCT Diary</span><span className="name"> Ilham</span>
                </li>
            </ul>
            <ul className="right-top">
                <li className="user"><img src={user} alt="" /></li>
                <li className="hamb"  onClick={() => setShowMenu((showMenu) => !showMenu)}>
                    <img src={hamb} alt="" 
                    className={isActive ? 'hamb-active': null} 
                    onClick={toggleClass} 
                   />
                </li>
         
                <div className="mobile-menu" style={{transform: showMenu ? 'translateX(0%)' : 'translateX(100%)'}}>
                    <nav>
                        <ul className="dropdown">
                            <li>Who we are</li>
                            <li>Why we do this</li>
                            <li>Contacts</li>
                            <div className="logout">
                            <li>Ilham Kazimov</li>
                            <li>Log out</li>
                            </div>
                        </ul>
                    </nav>
                </div>
                
            </ul>
          </nav>
           </div>
     </header>
    <section className="flowers">
        <img src={flower} alt="" />
    </section> 
    <section>
        <div className="container">
            <form action="" className="form">
                <label htmlFor="">What were your mindful practices for today?</label>
                <input type="text" />
                <label htmlFor="">Reflect on your mindful practices.... how did they go and how could they be improved?</label>
                <input type="text" />
                <label htmlFor="">Reflect on your thoughts throughout the day, which ones need further consideration and questioning? </label>
                <input type="text" />
                <label htmlFor="">What is the truth?</label>
                <input type="text" />
                <label htmlFor="">Reflect on the emotions of the day, which ones need further consideration and thought? </label>
                <input type="text" />
                <label htmlFor="">How else could you have reacted?</label>
                <input type="text" />
                <label htmlFor="">Reflect on your behaviours of the day, which ones need further consideration and improvement? </label>
                <input type="text" />
                <label htmlFor="">How else could you have reacted?</label>
                <input type="text" />
                <label htmlFor="">What were your achievements of the day?</label>
                <input type="text" />
                <label htmlFor="">What needs to be celebrated?</label>
                <input type="text" />
                <button>Send</button>
            </form>
        </div>
    </section>  
    <footer>
        
        <div className="container">
           <p className="top-text">For your information</p>
           <p>I have created you a 28-day MBCT and Mindfulness Diary for you to print out or write online and use to help with reflecting on your mindful practices as well as your thoughts, emotions and behaviours.</p>
           <p>Keeping a record of our mindful practices along with the thoughts, emotions and behaviours we exhibit allows us to reflect on them, understand them and improve on them if we need to.</p>
           <p>Follow through with this exercise for just 28 days and you may find that you want to keep doing it, you may find it helps you grow and become a better version of yourself each and every day.</p>
           <p>Enjoy the process of mindful meditation and keep practicing with me! </p>
           <div className="bottom-text">
            <p>With kindness</p>
           <p>Your Mindfulness Cognitive</p>
           <span>Therapy Coach</span>
           <p className="day">Days: 21</p>
           </div>
           
           <img src={lilia} alt="" className="lilia"/>
        </div>
    </footer> 
    </>
  )
}

export default Home;



