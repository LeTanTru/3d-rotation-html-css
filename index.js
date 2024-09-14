const box = document.querySelector(".box");
const imageCount = 10;

let htmls = "";
for (let i = 0; i < imageCount; i++) {
  htmls += `<span style="--i: ${i + 1}">
        <img src="./${i + 1}.jfif" alt="" />
      </span>`;
}
box.innerHTML = htmls;
