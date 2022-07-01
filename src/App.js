import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {


  let [input, setinput] = useState("");
  let id = useRef();

  let [data, setdata] = useState([]);

  async function getdata() {
    console.log("yes")
    let x = await fetch(`http://localhost:8080/country?q=${input}`);
    let y = await x.json();
    console.log(y)
    setdata(y)

  }

  useEffect(() => {


    if (input.length) {

      clearTimeout(id.current)


      id.current = setTimeout(() => {
        getdata()
      }, 1000);


    }

  }, [input])


  return (
    <div className="App">
      <div className="input_div">
        <div ><input type="text" onChange={(e) => { setinput(e.target.value) }} /></div>

        <div className="hide_scroll" style={{ overflow: "hidden", scrollbarWidth: "10px" }}>

          {data.map((e, index) => <div key={index} style={{ margin: "10px", textAlign: "start" }}>{e.country}</div>)}

        </div>
      </div>
    </div >
  );
}

export default App;
