import React, { useState } from 'react';
import { CheckSquare } from 'lucide-react';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { Todo } from './types/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <CheckSquare className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-800">Todo List</h1>
          </div>
          
          <TodoInput onAdd={addTodo} />

          {todos.length > 0 ? (
            <div>
              <div className="mb-4 text-sm text-gray-600">
                {completedCount} of {todos.length} tasks completed
              </div>
              <div className="space-y-2">
                {todos.map(todo => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No todos yet. Add one above!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;