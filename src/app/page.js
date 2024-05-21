"use client";
import { useState } from "react";
import "./scss/style.css";
export default function Home() {
  const [projects, setProjects] = useState([
    {
      name: "name",
      balane: "300",
    },
  ]);
  return (
    <div className="container">
      <nav className="box2">
        <div className="logo">
          <div className="app">
            <img src="/logo.png" alt="" />
            <div className="data">
              <span>Projects Manager</span>
              <span>Hello , User Name</span>
            </div>
          </div>
        </div>
        <a href="##">
          <i className="fa-light fa-gear"></i>
        </a>
      </nav>

      <div className="box2 cards">
        <div className="dCard">
          <div className="balance">
            <span>Done Projects</span>
            <h2>1200 $</h2>
          </div>
          <i class="fa-light fa-badge-check green"></i>
          <div className="count">3</div>
        </div>
        <div className="dCard">
          <div className="balance">
            <span>Prepaid Projects</span>
            <h2>200 $</h2>
          </div>
          <i class="fa-light fa-envelope-open-dollar blue"></i>
          <div className="count">1</div>
        </div>
        <div className="dCard">
          <div className="balance">
            <span>Pending Projects</span>
            <h2>1200 $</h2>
          </div>
          <i class="fa-light fa-timer red"></i>
          <div className="count">1</div>
        </div>
        <div className="dCard">
          <div className="balance">
            <span>Total Balance</span>
            <h2>1200 $</h2>
          </div>
          <i class="fa-light fa-circle-dollar orange"></i>
        </div>
      </div>

      <div className="box2 data">
        <header>
          <i className="fa-solid fa-circle"></i> Done Projects
        </header>
        <div className="tabel">
          <table className="tg">
            <thead>
              <tr>
                <th> Project Name</th>
                <th> Project Balance </th>
                <th> Project State </th>
                <th>Control Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Project Name</td>
                <td>300$</td>
                <td>Done</td>
                <td>
                  <div className="tools">
                    <i className="fa-solid fa-edit"></i>
                    <i className="fa-solid fa-trash"></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

{
  /* <select name="" id="">
                    <option value="0">Edit State</option>
                    <option value="Done">Done</option>
                    <option value="Prepaid">Prepaid</option>
                    <option value="Pending">Pending</option>
                  </select> */
}
