import axios from "axios";

import { useEffect, useRef, useState } from "react";

import todoService from '../services/todoService'

function Todos ({ user }) {

    const [todos, setTodos] = useState([])

    let notesRef = useRef()

    const getAllTodos = async () => {

        try {
            
            const response = await todoService.index()

            setTodos(response.data.todos)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllTodos()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        let newTodo = {
            notes: notesRef.current.value,
            user
        }

        try {

            const response = await todoService.add(newTodo)

            setTodos([...todos, response.data.todo])
            notesRef.current.value = ''

        } catch (error) {
            console.log(error)
        }

        
    }

    return ( 
        <div>
            <h1>Todos</h1>

            <ol style={{ 
                display: 'flex', 
                flexDirection: 'column',
                height: '100%',
                padding: '20px'
            }}>
                {todos.map(t => 
                    <li key={t._id}> {t.notes}</li>
                )}
            </ol>

            <form onSubmit={handleSubmit}>
                <input type="text" ref={notesRef} /><br /><br />
                <button>Add Todo</button>
            </form>
        </div>
    );
}

export default Todos ;