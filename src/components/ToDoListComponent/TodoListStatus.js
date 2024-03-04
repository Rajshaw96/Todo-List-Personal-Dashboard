import React from 'react';
function TodoListStatus(props){
  return (
    <div className="row g-6 mb-6">
      <div className="col-xl-4 col-sm-6 col-12">
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="row">
              <div className="todo-stats col">
                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total Task</span>
                <span className="h3 font-bold mb-0">{props.total}</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                  <i className="bi bi-list-task"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-sm-6 col-12">
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Pending</span>
                <span className="h3 font-bold mb-0">{props.Pending}</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                  <i className="bi bi-clock-history"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-sm-6 col-12">
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Complete</span>
                <span className="h3 font-bold mb-0">{props.Completed}</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                  <i className="bi bi-check2-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListStatus;
