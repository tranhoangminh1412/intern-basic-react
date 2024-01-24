import New from "../../Content/Columns/New"
import Finished from "../../Content/Columns/Finished"
import Abandoned from "../../Content/Columns/Aborted"


function TodoApp(props) {
    return (
        <>
            <New category="New" >

            </New>
            <Finished>

            </Finished>
            <Aborted>

            </Aborted>
        </>
    )
}

export default TodoApp