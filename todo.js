"use strict";

const title = document.getElementById("title");
const addBtn = document.querySelector(".btn");
const newTable = document.querySelector(".newTable");
const clear = document.getElementById("clear");
const container = document.querySelector(".container");
const test = document.getElementById(".test");
// console.log(container);

let newBookList;
let editBtn;
let removeBtn;
let checkBtn;
let newText;
let checked;
let game = false;

function addBookList() {
  addBtn.addEventListener("click", () => {
    if (title.value == "") {
      alert("Please write something here!");
    } else {
      newBookList = document.createElement("div");
      newBookList.classList.add("newBook");
      newTable.appendChild(newBookList);

      newText = document.createElement("p");
      newText.textContent = title.value;
      newText.classList.add("newText");
      newBookList.appendChild(newText);

      removeEditBtn();

      title.value = "";
    }
  });
}
addBookList();

function removeEditBtn() {
  let divEditRemove = document.createElement("div");
  divEditRemove.classList.add("divEditRemove");

  checkBtn = document.createElement("button");
  checkBtn.classList.add("editBtn");
  checkBtn.innerHTML = `✅`;
  divEditRemove.appendChild(checkBtn);

  editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");
  editBtn.innerHTML = `✍🏼`;
  divEditRemove.appendChild(editBtn);

  removeBtn = document.createElement("button");
  removeBtn.classList.add("removeBtn");
  removeBtn.innerHTML = `❌`;
  divEditRemove.appendChild(removeBtn);

  newBookList.appendChild(divEditRemove);

  checkBtn.addEventListener("click", () => {
    newBookList.style.color = "#ccc";
    newBookList.style.backgroundColor = "#3f3f3f";
    newText.classList.add("checkText");
  });

  removeBtn.addEventListener("click", () => {
    removeElements();
  });

  editBtn.addEventListener("click", () => {
    title.value = newText.textContent;
    removeElements();
  });

  clear.addEventListener("click", () => {
    // newTable.remove()
    window.location.reload();
  });
}
function removeElements() {
  newBookList.remove();
}
