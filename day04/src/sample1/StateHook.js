const { useState } = require("react");

function ExampleWirhManyState() {
    //--
    const [age, setAge] = useState(42)
    const [fruit, setFruit] = useState('apple')
    const [todos, setTodos] = useState([{text: 'Hook에 대해서 배우기!'}])
    //..
}