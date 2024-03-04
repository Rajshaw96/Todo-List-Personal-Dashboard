import React from 'react';
import SideNavbar from "../Navbar/SideNavbar";
import TopNavbar from "../Navbar/TopNavbar";
const UserProfile = ({ name, email, profilePicture, phone, address }) => {
  return (
    <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
    <SideNavbar></SideNavbar>
      <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          <TopNavbar></TopNavbar>
          <main className="py-6 bg-surface-secondary">
              <div className="container-fluid">
                <div className="row g-6 mb-6">
                  <div className="col-lg-4">
                    <div className="card mb-4 user-profile">
                      <div className="card-body text-center">
                          <img style={{width: 100}} src={profilePicture} alt="Profile" />
                        <h5 className="my-3">{name}</h5>
                        <p className="text-muted mb-1">Full Stack Developer</p>
                        <p className="text-muted mb-4">{email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="card mb-4">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Full Name</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{name}</p>
                            </div>
                          </div>
                          <hr/>
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Email Id</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{email}</p>
                            </div>
                          </div>
                          <hr/>
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Phone No.</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{phone}</p>
                            </div>
                          </div>
                          <hr/>
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Address</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{address}</p>
                            </div>
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

export default UserProfile;
