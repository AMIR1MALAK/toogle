import "./App.css";
import "./theme.css"


import { useState } from "react";

function App() {
  const [myname, myynamee] = useState("amir malak");
  const [mycount, counter] = useState('0');
  const [theme, settheme] = useState("");
    return(
      <div className={`App  ${theme}`}>
        <button onClick={   ()   =>   {settheme(theme ==""   ?   "dark"   :   "light" )}  } style={{marginBottom: "50px"}}>toggle theme</button>





        <div style={{marginBottom: "40px"}}
        onChange={   ()   =>   {settheme(theme ==""   ?   "dark"   :   "light" )}  }
        className="btn-container">
  <i className="fa fa-sun-o" aria-hidden="true" />
  <label className="switch btn-color-mode-switch">
    <input type="checkbox" name="color_mode" id="color_mode" defaultValue={1} />
    <label htmlFor="color_mode" data-on="Dark" data-off="Light" className="btn-color-mode-switch-inner" />
  </label>
  <i className="fa fa-moon-o" aria-hidden="true" />

</div>






















     <div>
         <button onClick={   ()    =>    {settheme("light")}    } style={{marginRight: "26px"}}>light</button>
         <button  onClick={   ()    =>    {settheme("dark")}    } style={{marginRight: "26px"}}>dark</button>
         <button  onClick={   ()    =>    {settheme("gray")}    } style={{marginRight: "26px"}}>gray</button>
         <button  onClick={   ()    =>    {settheme("pink")}    } style={{marginRight: "26px"}}>pink</button>
      
      
     </div>


















        <h1>my name is {myname}</h1>
        <button onClick={     ()   =>    {myynamee('king kong')}    } >change name</button>
        <br />
        <br />
        <br/>
        <button onClick={       ()     =>      {counter(mycount+1)}   }>count is {mycount}</button>





  </div>
  );
}
export default App;
