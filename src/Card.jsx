import profilePic from './assets/thui.jpg'
import ListItem from './ListItem'

function Card() {
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt=""></img>
            <h2 className='card-title'>Jason Tran</h2>
            <p className='card-text'>I am studying Computer Science and Race Motorbikes</p>
        </div>
    )
}

export default Card