import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { tabs } from './Data/tabs'


function App() {
  let [activetabs, setActivetabs] = useState(0)
  let [activeContent, setActivecontent] = useState(tabs[0])

  let changeData=(index)=>{
    setActivetabs(index)
    setActivecontent(tabs[index])
  }

  return (
    <>
      <div className="App">
        <div className="tabsOuter">
          <h1 style={{textAlign:'left'}}>Law Prep Vision Mission and Values</h1>

          <ul>
            {tabs.map((tabsItems, index)=>{
              return(
                <li>
                  <button onClick={()=>changeData(index)} className={activetabs==index ? 'activeButton' : ''}>{tabsItems.title}</button>
                </li>
              )
            })}

          </ul>

          {
            activeContent!==undefined ? 
            <p>{activeContent.description}</p>
            :
            ''
          }
          

        </div>
      </div>
    </>
  )
}

export default App
