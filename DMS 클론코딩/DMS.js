let D = new Date();
const Year = D.getFullYear();
const Month = D.getMonth() + 1;
const date = D.getDate();
const day_a = ["일", "월", "화", "수", "목", "금", "토"];
const day = day_a[D.getDay()];
const date_text = document.getElementsByClassName("date")[0];
date_text.innerHTML = `${Year}년 ${Month}월 ${date}일 ${day}요일`;

const bob = {
  breakfast: document.getElementsByClassName("menu_frame_text")[0],
  lunch: document.getElementsByClassName("menu_frame_text")[1],
  dinner: document.getElementsByClassName("menu_frame_text")[2],
};
function fillZero(width, str) {
  return str.length >= width
    ? str
    : new Array(width - str.length + 1).join("0") + str;
}

fetch(`https://api.dsm-dms.com/meal/${Year}-${Month}-${date}`)
  .then((response) => response.json())
  .then((json) => {
    const key = Object.keys(json[`2022-06-01`]);

    console.log(key);
    console.log(json[`2022-06-01`][key[0]]);
    for (i = 0; i < key.length; i++) {
      for (j = 0; j < json[`2022-06-01`][key[i]].length; j++) {
        const bob_p = document.createElement("p");
        bob_p.innerHTML = json[`2022-06-01`][key[i]][j];
        switch (i) {
          case 0:
            bob.breakfast.appendChild(bob_p);
            break;
          case 1:
            bob.dinner.appendChild(bob_p);
            break;
          case 2:
            bob.lunch.appendChild(bob_p);
            break;
        }
      }
    }
  });
// .catch((error) => console.log("error:", error));
