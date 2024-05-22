"use client";
import { useEffect, useState } from "react";
import "./scss/style.css";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [pending, setPending] = useState([]);
  const [done, setDone] = useState([]);
  const [prepaid, setPrepaid] = useState([]);
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [cat, setCat] = useState("0");
  const [totalBudget, setTotal] = useState(0);
  const [doneBudget, setdoneBudget] = useState(0);
  const [pendingBudget, setpendingBudget] = useState(0);
  const [prepaidBudget, setprepaidBudget] = useState(0);
  const [walletBudget, setwalletBudget] = useState(0);

  const updateProjects = () => {
    const pendingProjects = projects.filter((e) => e.type === "Pending");
    const prepaidProjects = projects.filter((e) => e.type === "Prepaid");
    const doneProjects = projects.filter((e) => e.type === "Done");
    setDone(doneProjects);
    setPending(pendingProjects);
    setPrepaid(prepaidProjects);
  };

  useEffect(() => {
    if (projects.length > 0) {
      const total = projects.reduce(
        (accumulator, currentValue) => accumulator + currentValue.budget,
        0
      );
      setTotal(total);
      const doneB = projects
        .filter((e) => e.type === "Done")
        .reduce(
          (accumulator, currentValue) => accumulator + currentValue.budget,
          0
        );
      setdoneBudget(doneB);
      const pendingB = projects
        .filter((e) => e.type === "Pending")
        .reduce(
          (accumulator, currentValue) => accumulator + currentValue.budget,
          0
        );
      setpendingBudget(pendingB);
      const prepaidB = projects
        .filter((e) => e.type === "Prepaid")
        .reduce(
          (accumulator, currentValue) => accumulator + currentValue.budget,
          0
        );
      setprepaidBudget(prepaidB);
      const walletB = doneB + prepaidB;
      setwalletBudget(walletB);
    }
  }, [projects]);

  const handelAdd = () => {
    const DateNow = Date.now();
    if (name !== "" && budget !== 0 && cat !== "0") {
      const newArray = [
        ...projects,
        { id: DateNow, name: name, budget: +budget, type: cat },
      ];
      hidePop();
      setProjects(newArray);
      localStorage.setItem("projects", JSON.stringify(newArray));
      setName("");
      setBudget("");
      setCat("0");
      updateProjects();
    } else {
      alert("add data");
    }
  };
  function hidePop() {
    document.getElementById("pop").style.display = "none";
    setName("");
    setBudget("");
    setCat("0");
  }
  function hideEdit() {
    document.getElementById("edit").style.display = "none";
    setName("");
    setBudget("");
    setCat("0");
  }
  const deleteProject = (id) => {
    if (projects.length === 1) {
      setTotal(0);
      setdoneBudget(0);
      setpendingBudget(0);
      setprepaidBudget(0);
      setwalletBudget(0);
    }
    let filtered = projects.filter((e) => e.id !== id);
    setProjects(filtered);
    updateProjects();
    localStorage.setItem("projects", JSON.stringify(filtered));
  };
  const showEdit = (id) => {
    document.getElementById("edit").style.display = "flex";
    document.querySelector(".editBtn").id = id;
    let project = projects.filter((e) => e.id === id);
    setName(project[0].name);
    setBudget(+project[0].budget);
    setCat(project[0].type);
  };

  const handelEdit = (e) => {
    let id = e.target.id;
    let project = projects.filter((e) => e.id == id);
    if (name !== "" && budget !== 0 && cat !== "0") {
      project[0].name = name;
      project[0].budget = budget;
      project[0].type = cat;
      localStorage.setItem("projects", JSON.stringify(projects));
      updateProjects();
      hideEdit();
    } else {
      alert("add data");
    }
  };
  useEffect(() => {
    let p = JSON.parse(localStorage.getItem("projects"));
    if (p) {
      setProjects(p);
    }
  }, []);

  useEffect(() => {
    const pendingProjects = projects.filter((e) => e.type === "Pending");
    const prepaidProjects = projects.filter((e) => e.type === "Prepaid");
    const doneProjects = projects.filter((e) => e.type === "Done");
    setDone(doneProjects);
    setPending(pendingProjects);
    setPrepaid(prepaidProjects);
  }, [projects]);

  return (
    <div className="container">
      <div className="w100 addForm" id="edit">
        <div
          className="close"
          id="close"
          onClick={() => {
            hideEdit();
          }}
        ></div>
        <i
          className="fa-regular fa-x closex"
          onClick={() => {
            hideEdit();
          }}
        ></i>
        <div className="inputs">
          <div className="input">
            <span>Project Name</span>
            <input
              type="text"
              placeholder="Project Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          <div className="input">
            <span>Project Budget</span>
            <input
              type="number"
              placeholder="Project Budget"
              onChange={(e) => {
                setBudget(e.target.value);
              }}
              value={budget}
            />
          </div>
          <div className="input">
            <span>Project Type</span>
            <div className="select">
              <select
                name=""
                id=""
                onChange={(e) => {
                  setCat(e.target.value);
                }}
                value={cat}
              >
                <option value="0">Select Type</option>
                <option value="Done">Done</option>
                <option value="Pending">Pending</option>
                <option value="Prepaid">Prepaid</option>
              </select>
            </div>
          </div>
          <button
            className="addProject editBtn"
            onClick={(e) => {
              handelEdit(e);
            }}
          >
            Edit Project{" "}
          </button>
        </div>
      </div>
      <div className="w100 addForm" id="pop">
        <div
          className="close"
          id="close"
          onClick={() => {
            hidePop();
          }}
        ></div>
        <i
          className="fa-regular fa-x closex"
          onClick={() => {
            hidePop();
          }}
        ></i>
        <div className="inputs">
          <div className="input">
            <span>Project Name</span>
            <input
              type="text"
              placeholder="Project Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          <div className="input">
            <span>Project Budget</span>
            <input
              type="number"
              placeholder="Project Budget"
              onChange={(e) => {
                setBudget(e.target.value);
              }}
              value={budget}
            />
          </div>
          <div className="input">
            <span>Project Type</span>
            <div className="select">
              <select
                name=""
                id=""
                onChange={(e) => {
                  setCat(e.target.value);
                }}
                value={cat}
              >
                <option value="0">Select Type</option>
                <option value="Done">Done</option>
                <option value="Pending">Pending</option>
                <option value="Prepaid">Prepaid</option>
              </select>
            </div>
          </div>
          <button className="addProject" onClick={handelAdd}>
            Add Project <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
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
          <div className="Budget">
            <span>Done Projects</span>
            <h2>{doneBudget} $</h2>
          </div>
          <i className="fa-light fa-badge-check green"></i>
        </div>
        <div className="dCard">
          <div className="Budget">
            <span>Prepaid Projects</span>
            <h2>{prepaidBudget} $</h2>
          </div>
          <i className="fa-light fa-envelope-open-dollar blue"></i>
        </div>
        <div className="dCard">
          <div className="Budget">
            <span>Pending Projects</span>
            <h2>{pendingBudget} $</h2>
          </div>
          <i className="fa-light fa-timer red"></i>
        </div>
        <div className="dCard">
          <div className="Budget">
            <span>On Wallet</span>
            <h2>{walletBudget} $</h2>
          </div>
          <i className="fa-light fa-wallet purple"></i>
        </div>
        <div className="dCard">
          <div className="Budget">
            <span>Total Budget</span>
            <h2>{totalBudget} $</h2>
          </div>
          <i className="fa-light fa-circle-dollar orange"></i>
        </div>
      </div>

      <div className="box2 data">
        <header>
          <i className="fa-solid fa-circle"></i> Done Projects
        </header>
        <div className="tabel">
          {done.length > 0 ? (
            <table className="tg">
              <thead>
                <tr>
                  <th> Project Name</th>
                  <th> Project Budget </th>
                  <th> Project State </th>
                  <th>Control Tools</th>
                </tr>
              </thead>
              <tbody>
                {done.map((e) => (
                  <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.budget + "$"}</td>
                    <td>{e.type}</td>
                    <td>
                      <div className="tools">
                        <i
                          className="fa-solid fa-edit"
                          onClick={() => {
                            showEdit(e.id);
                          }}
                        ></i>
                        <i
                          className="fa-solid fa-trash"
                          onClick={() => {
                            deleteProject(e.id);
                          }}
                        ></i>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h2 className="noMes">No Projects yet .</h2>
          )}
        </div>
      </div>
      <div className="box2 data">
        <header>
          <i className="fa-solid fa-circle"></i> Pending Projects
        </header>
        <div className="tabel">
          {pending.length > 0 ? (
            <table className="tg">
              <thead>
                <tr>
                  <th> Project Name</th>
                  <th> Project Budget </th>
                  <th> Project State </th>
                  <th>Control Tools</th>
                </tr>
              </thead>
              <tbody>
                {pending.map((e) => (
                  <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.budget + "$"}</td>
                    <td>{e.type}</td>
                    <td>
                      <div className="tools">
                        <i
                          className="fa-solid fa-edit"
                          onClick={() => {
                            showEdit(e.id);
                          }}
                        ></i>
                        <i
                          className="fa-solid fa-trash"
                          onClick={() => {
                            deleteProject(e.id);
                          }}
                        ></i>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h2 className="noMes">No Projects yet .</h2>
          )}
        </div>
      </div>
      <div className="box2 data">
        <header>
          <i className="fa-solid fa-circle"></i> Prepaid Projects
        </header>
        <div className="tabel">
          {prepaid.length > 0 ? (
            <table className="tg">
              <thead>
                <tr>
                  <th> Project Name</th>
                  <th> Project Budget </th>
                  <th> Project State </th>
                  <th>Control Tools</th>
                </tr>
              </thead>
              <tbody>
                {prepaid.map((e) => (
                  <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.budget + "$"}</td>
                    <td>{e.type}</td>
                    <td>
                      <div className="tools">
                        <i
                          className="fa-solid fa-edit"
                          onClick={() => {
                            showEdit(e.id);
                          }}
                        ></i>
                        <i
                          className="fa-solid fa-trash"
                          onClick={() => {
                            deleteProject(e.id);
                          }}
                        ></i>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h2 className="noMes">No Projects yet .</h2>
          )}
        </div>
      </div>
      <div className="box2 flex p50">
        <button
          className="addProject"
          onClick={() => {
            document.getElementById("pop").style.display = "flex";
          }}
        >
          Add Project <i className="fa-solid fa-plus"></i>
        </button>
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
