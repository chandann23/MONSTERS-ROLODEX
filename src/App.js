
import './App.css';
import { useState , useEffect} from 'react';
import CardList from './Components/Card-list/CardList.component'
import SearchBox from './Components/Input-box/Search-box.component'

const App= () =>{

const [searchString , setSearchString] = useState("")
const [monsters,setMonsters]=useState([]);
const [filteredMonsters , serFilteredMonsters]= useState(monsters);
console.log("render");

useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((users) => setMonsters(users)) },[]);

useEffect(()=>{
  const monsterSearch= monsters.filter((monster) =>{
    return monster.name.toLowerCase().includes(searchString);
     });
     serFilteredMonsters(monsterSearch)},
     [monsters,searchString]


);
const  onSearchChange=(event) => {
    
  const searchStringValue = event.target.value.toLowerCase();
  setSearchString(searchStringValue);
  }
  


 
  return (<div className="App">
  <h1 className='heading'>MONSTERS ROLODEX</h1>

  <SearchBox 
    className="monsters-search-box"
    placeholder="search monsters"
    onChangeHandler={onSearchChange}/>

   
    <CardList 
    monsters={filteredMonsters}/>
  </div>)}








export default App;
