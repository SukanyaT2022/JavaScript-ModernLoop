
import './App.css';

function App() {

  // const filteredData = arr.filter((item)=>item>8);
  let arr = [4,4,4,8,8,8,8,8,7,7,7,9,9,3,3,1];
  let colors = ["red","red","red","green","green"]

  const counter = (arr)=>{
    let counts = {};
    arr.forEach((item)=>{
      counts[item] = (counts[item] || 0) + 1;
      // (counts[item] || 0) if not find repeat so show undefine -- if repeat go +1
    })
    return counts;
  }

  const result = counter(colors)
  for(let i=0;i<result.length;i++){
    (result[i]>result[i+1])?console.log(result[i]):console.log(result[i])
  }
  return (
    <div className="App">
     <h2>{result}</h2>
    </div>
  );
}

export default App;
