import moment from "moment"
import Positions from "./Positions"


// const cities = fetch("https://provinces.open-api.vn/api/")


const Users =
    [
        {
            id: 1,
            username: "tranhoangminh1412",
            fullname: "Tran Hoang Minh",
            birthday: moment("14/12/2003"),
            position: Positions[4],
            password: "vungoimora",
            // city: cities[0].name,
            usertype: "admin"
        },
        {
            id: 2,
            username: "conmeodoi",
            fullname: "Tran Van A",
            birthday: moment("14/12/2004"),
            position: Positions[4],
            password: "vungoimora",
            // city: cities[15].name,
            usertype: "user"
        }
    ]


export default Users