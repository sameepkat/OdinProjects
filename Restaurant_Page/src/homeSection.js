
import momoImage from "../asset/momo.jpg"

export default () => {
    content.innerHTML = ""
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const p = document.createElement("p");
    h2.textContent = "MoMo"
    div.appendChild(h2);
    img.src = momoImage;
    div.appendChild(img);
    p.textContent = "Welcome to our restaurant! Enjoy our delicious Momos, made with fresh ingredients";
    div.appendChild(p);
    div.id = "container";
    content.appendChild(div);
}

