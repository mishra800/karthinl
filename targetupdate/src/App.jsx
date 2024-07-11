import React from 'react';
import "./App.css";

const App = () => {
  return (
    <div className="app" >
      <header className='app_header'>Header Section </header>
      <main className='app_main' >
        <section className='task_column'>1</section>
        <section className='task_column'>2</section>
        <section className='task_column'>3</section>
        <section className='task_column'></section>
      </main>
    </div>
  );
};

export default App
