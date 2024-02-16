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
            city: "Hanoi",
            usertype: "admin",
            status: "approved",
            salary: "100000",
        },
        {
            id: 2,
            username: "conmeodoi",
            fullname: "Thu Hai",
            birthday: moment("14/12/2004"),
            position: Positions[4],
            password: "vungoimora",
            city: "Hanoi",
            usertype: "user",
            status: "approved",
            salary: "100000",
        },
        {
            id: 3,
            username: "nguoithuba",
            fullname: "Thu Ba",
            birthday: moment("14/12/2003"),
            position: Positions[4],
            password: "vungoimora",
            city: "Hanoi",
            usertype: "user",
            status: "approved",
            salary: "100000",
        },
        {
            id: 4,
            username: "nguoithutu",
            fullname: "Thu Tu",
            birthday: moment("14/12/2003"),
            position: Positions[4],
            password: "vungoimora",
            city: "Hanoi",
            usertype: "user",
            status: "pending",
            salary: "100000",
        },
        {
            id: 5,
            username: "nguoithunam",
            fullname: "Thu Nam",
            birthday: moment("14/12/2003"),
            position: Positions[4],
            password: "vungoimora",
            city: "Hanoi",
            usertype: "user",
            status: "denied",
            salary: "100000",
        },
    ]

export default Users