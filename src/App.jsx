import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'antd/dist/reset.css'
import './App.css'
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import { feedimgs } from './api';

// feedimgs();

const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Home/>
      </div>
    </QueryClientProvider>
  )
}

export default App
