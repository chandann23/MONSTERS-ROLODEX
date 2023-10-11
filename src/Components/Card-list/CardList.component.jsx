
import "./card-list.style.css"
import Card from "../Card/Card.component"
const CardList =( {monsters}) =>(
    
        <div className="card-list"> 
        {monsters.map((monster) => {
            return <Card monster={monster} key ={monster.id}/>
                
        })}
    </div>

      )


export default CardList;


{/*import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;*/}