import React from "react";

/* eslint-disable linebreak-style */
const questions = (i, sex) => {
  const base = [
    [
      "Ты бы хотел, чтобы Мел стала твоей лучшей подругой?",
      "Ты бы хотела, чтобы Мел стала твоей лучшей подругой?"
    ],
    ["Кто твой любимый злодей?", "Кто твой любимый злодей?"],
    [
      "Ты бы хотел сняться в сериале «Наследники»?",
      "Ты бы хотела сняться в сериале «Наследники»?"
    ],
    ["Выбери наряд!", "Выбери наряд!"],
    [
      "С кем из учениц Аурадона ты бы хотел познакомиться?",
      "С кем из учениц Аурадона ты бы хотела познакомиться?"
    ],
    [
      "Какой цвет часто присутствует в твоей одежде?",
      "Какой цвет часто присутствует в твоей одежде?"
    ]
  ];
  if (i < base.length) {
    if (sex === "male") {
      return <p className="quesions_text">{base[i][0]}</p>;
    }
    return <p className="quesions_text">{base[i][1]}</p>;
  }
  return <h1>HOLA</h1>;
};

export default questions;
