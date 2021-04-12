import {Button} from 'react-bootstrap';
import Card1 from '../Card/Card1';
import '../global.scss'

function Doctorsection() {
    return (
        <section className="py-5">
            <div className="container">
            <h2>Doctors</h2>
            <div className="row justify-content-center">
            <Card1></Card1>
            <Card1></Card1>
            <Card1></Card1>
            </div>
        <Button className='px-4 py-2' style={{backgroundColor:'#22a7f0'}}>View All</Button>
            </div>
            

        </section>
        
    )
}

export default Doctorsection