import React,{useEffect, useState} from 'react'
import EmojiData from './Emoji.json';

const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);

  useEffect(()=>{
      const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
      setData(newData);
  },[search])
  return (
    <div>
      <center>
        <h1> Emoji Search</h1>h
        <div className='container'>
        <input size="30" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Emoji Ex: Smile,Angry'/>
        <div className='minidiv'>
        <p>By Moinuddin <code>Contact On: <a href="https://wa.me/916301110641">WhatsApp</a> </code></p>
        </div>
        </div>
        </center>
        <center>
        <div className='container'>
        {data.map(emoji =>
          <div className="card" key={emoji.title}>
          <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copy")}}>
            {emoji.symbol} {emoji.title}
          </div>
        </div>
        
        )}
      </div>
      </center>
    </div>
  )
}
export default App
