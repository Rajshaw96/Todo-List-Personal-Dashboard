import React from "react";
import SideNavbar from "../Navbar/SideNavbar";
import TopNavbar from "../Navbar/TopNavbar";
import TodoList from "../ToDoListComponent/TodoList";
import Weather from "../WeatherComponent/Weather";

const PersonalDashboard = () => {
  return (
    <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <SideNavbar></SideNavbar>
      <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        <TopNavbar></TopNavbar>
        <main className="py-6 bg-surface-secondary">
          <div className="container-fluid">
          {/* <TodoListStatus></TodoListStatus> */}
            <div className="row g-6 mb-6">
              <div className="col-xl-6 col-sm-6 col-12">
                <div className="card shadow border-0">
                  <div className="card-body">
                    <div className="row">
                      <TodoList></TodoList>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-sm-6 col-12">
                <div className="card shadow border-0">
                  <div className="card-body">
                    <div className="row">
                      <Weather></Weather>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PersonalDashboard;
