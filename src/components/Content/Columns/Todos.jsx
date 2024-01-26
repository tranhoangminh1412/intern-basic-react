import moment from "moment/moment"

let currentDate = moment().format('MMMM Do YYYY, h:mm:ss a')

const Todos = 
[
    {
        id:1,
        name: "Task 1",
        date: currentDate,
        status: "New"
    },
    {
        id:2,
        name: "Task 1",
        date: currentDate,
        status: "New"
    },
    {
        id:3,
        name: "Task 1",
        date: currentDate,
        status: "New"
    },
    {
        id:4,
        name: "Task 1",
        date: currentDate,
        status: "New"
    },
    {
        id:5,
        name: "Task 1",
        date: currentDate,
        status: "New"
    },
    {
        id:6,
        name: "Task 1",
        date: currentDate,
        status: "New"
    },
    {
        id:7,
        name: "Task 1",
        date: currentDate,
        status: "New"
    },
    {
        id:8,
        name: "Task 1",
        date: currentDate,
        status: "New"
    },
    {
        id:9,
        name: "Task 1",
        date: currentDate,
        status: "New"
    },
    {
        id:10,
        name: "Task 1",
        date: currentDate,
        status: "New"
    },
    {
        id:11,
        name: "Task 1 but very long nameeeeeeeeeeeeeeeeee",
        date: currentDate,
        status: "New"
    },
    {
        name: "Finished Task",
        date: currentDate,
        status: "Finished"
    },
    {
        name: "Aborted Task",
        date: currentDate,
        status: "Aborted"
    }
]

export default Todos