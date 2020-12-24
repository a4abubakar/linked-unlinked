import React from "react";
import "./styles.css";

export default function Tribes() {
  const allUsers = [
    {
      id: 100,
      name: "Qasim Salam"
    },
    {
      id: 101,
      name: "Neelam Anwar"
    },
    {
      id: 102,
      name: "Saad Javaid"
    },
    {
      id: 103,
      name: "Talha Masood"
    },
    {
      id: 104,
      name: "Ali Bilal"
    },
    {
      id: 105,
      name: "Zain"
    },
    {
      id: 106,
      name: "Talal Ali"
    },
    {
      id: 107,
      name: "Bilal Zain"
    },
    {
      id: 108,
      name: "Mueez Ali"
    }
  ];

  const linked = [
    {
      id: 106,
      name: "Talal Ali"
    },
    {
      id: 108,
      name: "Mueez Ali"
    }
  ];
  const objKeys = ["id", "name"];

  const unlinked = allUsers
    .filter(function (o1) {
      return !linked.some(function (o2) {
        return o1.id === o2.id; // assumes unique id
      });
    })
    .map(function (o) {
      return objKeys.reduce(function (newo, name) {
        newo[name] = o[name];
        return newo;
      }, {});
    });

  return (
    <div className="App">
      Unlinked Users :
      {unlinked.map((data) => {
        return <li key={data.id}>{data.name}</li>;
      })}
    </div>
  );
}
