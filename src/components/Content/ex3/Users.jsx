import moment from "moment"
import Positions from "./Positions"


// const cities = fetch("https://provinces.open-api.vn/api/")


const Users =
    [
        {
            id: 1,
            username: "tranhoangminh1412",
            fullname: "Tran Hoang Minh",
            birthday: "14 12 2003",
            position: Positions[4],
            password: "vungoimora",
            city: "Ha Noi",
            usertype: "admin",
            status: "approved",
            salary: "100000",
        },
        {
            id: 2,
            username: "conmeodoi",
            fullname: "Thu Hai",
            birthday: "14 12 2003",
            position: Positions[4],
            password: "vungoimora",
            city: "Ha Noi",
            usertype: "user",
            status: "approved",
            salary: "100000",
        },
        {
            id: 3,
            username: "nguoithuba",
            fullname: "Thu Ba",
            birthday: "14 12 2003",
            position: Positions[4],
            password: "vungoimora",
            city: "Ha Noi",
            usertype: "user",
            status: "approved",
            salary: "100000",
        },
        {
            id: 4,
            username: "nguoithutu",
            fullname: "Thu Tu",
            birthday: "14 12 2003",
            position: Positions[4],
            password: "vungoimora",
            city: "Ha Noi",
            usertype: "user",
            status: "pending",
            salary: "100000",
        },
        {
            id: 5,
            username: "nguoithunam",
            fullname: "Thu Nam",
            birthday: "14 12 2003",
            position: Positions[4],
            password: "vungoimora",
            city: "Ha Noi",
            usertype: "user",
            status: "denied",
            salary: "100000",
        },
    ]

export default Users