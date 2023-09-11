import './Concepts.css';
import { concepts } from '../../App.database';

import headerImage from '../../assets/images/key-concepts.png';
import Header from './Header';
import Card from '../UI/Card';

function Concepts(props) {
    return (
        <div>
            <Header
                image={headerImage}
                title="Key React Concepts"
                description="Selected key React concepts you should know about"
            />
            <ul id="concepts">
                {concepts.map((item) => 
                    <Card 
                        image={item.image} 
                        title={item.title} 
                        description={item.description}
                    />
                )}
            </ul>
        </div>
    );
}

export default Concepts;