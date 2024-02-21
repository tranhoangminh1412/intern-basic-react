import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";

export default function ReactInfiniteCalendar(props) {

    const {setBirthday} = props

    function hide(dateElement) {
        setBirthday(dateElement)
        console.log(dateElement)
        document.querySelector(".datepicker").style.display = 'none'
    }

    return (
        <div>
            <InfiniteCalendar className="datepicker" selected={false} 
              onSelect={(date) => {
                var converted = date.toLocaleString('default', { month: 'numeric' }) 
                             + ' ' + date.getDate() + ' ' +date.getFullYear();
                hide(converted)
              }}
            />
        </div>
    );
}