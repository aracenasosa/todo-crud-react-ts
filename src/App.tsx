import { useState } from 'react'
import Todos from './components/Todos'
import { FilterValue, ITodo, TodoCompleted, TodoId } from './components/interfaces/types'
import { TODO_FILTERS } from './consts/consts'
import Footer from './components/interfaces/Footer'
import Header from './components/Header'

const App = (): JSX.Element => {

  const mockTodos = [
    {
      id: '1',
      title: 'Study ReactJS + Typescript',
      status: false
    },
    {
      id: '2',
      title: 'Set up Payoneer',
      status: true
    },
    {
      id: '3',
      title: 'Study English',
      status: false
    }
  ]

  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setfilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleDelete = ({ id }: TodoId) => setTodos(currenState => currenState.filter(todo => todo.id !== id))

  const handleCompleted = ({ id, status }: TodoCompleted): void => {
    const completedTodo = todos.map(todo => {
      if (todo.id === id) {
        return ({
          ...todo,
          status
        });
      }

      return todo;
    })

    setTodos(completedTodo);
  }

  const handleFilterSelected = (filter: FilterValue): void => {
    setfilterSelected(filter);
  }

  const activeCount = todos.filter(todo => !todo.status).length;

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.status
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.status

    return todo;
  })

  const onClearCompleted = (): void => {
    const removeCompleted = todos.filter(todo => !todo.status);
    setTodos(removeCompleted);
  }

  const handleAddTodo = (title: string): void => {
    const newTodo: ITodo = {
      id: crypto.randomUUID(),
      title,
      status: false
    }

    setTodos(currenState => [...currenState, newTodo]);
  }

  return (
    <>
      <section className='todoapp'>
        <Header onAddTodo={handleAddTodo} />
        <Todos todos={filteredTodos} handleDelete={handleDelete} handleCompleted={handleCompleted} />
        <Footer
          activeCount={activeCount}
          completedCount={todos.length - activeCount}
          onClearCompleted={onClearCompleted}
          filterSelected={filterSelected}
          handleFilterChange={handleFilterSelected} />
      </section>
    </>
  )
}

export default App
