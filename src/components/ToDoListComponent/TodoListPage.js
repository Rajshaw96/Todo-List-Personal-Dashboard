import React from 'react';
import SideNavbar from "../Navbar/SideNavbar";
import TopNavbar from "../Navbar/TopNavbar";
import TodoList from './TodoList';
const TodoListPage = () => {
  return (
    <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
    <SideNavbar></SideNavbar>
      <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          <TopNavbar></TopNavbar>
          <main className="py-6 bg-surface-secondary">
              <div className="container-fluid">
                <div className="card shadow border-0">
                  <div className="card-body">
                    <div className="row">
                      <TodoList></TodoList>
                    </div>
                  </div>
                </div>
              </div>
          </main>
      </div>
    </div>
  );
};

export default TodoListPage;
