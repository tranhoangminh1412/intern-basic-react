import Positions from "./Positions"
import moment from "moment"


// const cities = fetch("https://provinces.open-api.vn/api/")

const formattedDate = moment(new Date()).format('DD/MM/YYYY HH:mm:ss');

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
            creationtime: formattedDate,
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
            avatar: "./src/assets/thui.jpg",
            creationtime: formattedDate,
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
            creationtime: formattedDate,
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
            creationtime: formattedDate,
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
            creationtime: formattedDate,
        },
        {
            id: 6,
            username: "admintest",
            fullname: "Tran Hoang Minh",
            birthday: "14 12 2003",
            position: Positions[4],
            password: "vungoimora",
            city: "Ha Noi",
            usertype: "admin",
            status: "approved",
            salary: "100000",
            creationtime: formattedDate,
        },
    ]

export default Users