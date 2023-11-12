import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import style from './App.module.css';

import './global.css';


function App() {

  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />

        <main>
          <Post />
        </main>

      </div>
    </>
  )
}

export default App
