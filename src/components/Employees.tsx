import { useState } from "react";
import femaleProfile from "../img/femaleProfile.jpg";
import maleProfile from "../img/maleProfile.jpg";

function Employees() {
  const [workers, setWorkers] = useState([
    {
      id: 1,
      fullname: "Bob Vance",
      designation: "Vance Refridgerator",
      gender: "male",
    },
    {
      id: 2,
      fullname: "Ryan Howard",
      designation: "Dunder Mifflin",
      gender: "male",
    },
    {
      id: 3,
      fullname: "Michael Scott",
      designation: "Dunder Mifflin",
      gender: "male",
    },
    {
      id: 4,
      fullname: "Dwight Schrute",
      designation: "Dunder Mifflin",
      gender: "male",
    },
  ]);

  return (
    <main className="container">
      <div className="row">
        {workers.length === 0 && <p>No Item Found</p>}
        <div className="col-8">
          {workers.map((worker) => (
            <div key={worker.id} className="card">
              <img
                className="card-img-top"
                src={worker.gender === "male" ? maleProfile : femaleProfile}
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Full Name : {worker.fullname}</h5>
                <p className="card-text">
                  <b>Designation: {worker.designation}</b>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Employees;
