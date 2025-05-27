function generateRandomName() {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
    const nameLength = Math.floor(Math.random() * 3) + 6;

    let randomName = "";
    for (let i = 0; i < nameLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomName += characters.charAt(randomIndex);
    }

    return randomName + "png"
}

function generateRandomImageName() {
    const imageNumber = Math.floor(Math.random() * 40) + 1;
    return `img${imageNumber}.png`;

}

document.addEventListener("DOMContentLoaded", function () {
    const gallaryContainer = document.querySelector(".gallery");
    const imgModal = document.querySelector(".img-modal");
    const imgViewContainer = imgModal.querySelector(".img");
    const modalName = imgModal.querySelector(".img-name p");

    const tl = gsap.timeline({ paused: true });
    let clickedItemImgSrc = "";
    let clickedItemName = "";

    for (let i = 1; i <= 80; i++) {
        const item = document.createElement("div");
        item.classList.add("item");

        const itemImg = document.createElement("div");
        itemImg.classList.add("item-img");

        const imgTag = document.createElement("img");
        const RandomImageName = generateRandomImageName();
        imgTag.src = `./assets/${RandomImageName}`;
        itemImg.appendChild(imgTag);

        const itemName = document.createElement("div");
        itemName.classList.add("item-name");
        const randomName = generateRandomName();
        itemName.innerHtml = `<p>${randomName}</p>`;
        itemName.setAttribute("data-img", RandomImageName.replace(".png", ""));

        item.appendChild(itemImg);
        item.appendChild(itemName);

        item.addEventListener("click", () => {
            const dataUng = itemName.getAttribute("data-img");
            if (imgViewContainer && modalName) {
                clickedItemImgSrc = `./assets/${dataImg}.png`;
                clickedItemName = itemName.textContent;
                imgViewContainer.innerHTML = `<img src="${clickedItemImgSrc}" alt"" />`;
                modalName.textContent = clickedItemName;
                tl.reversed(!tl.reversed);
            }
        });
        galleryContainer.appendChild(item);
    }

    const closeBtn = document.querySelector(".close-btn");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            tl.reversed(!tl.reversed());
        });
    }

    function revealModal() {
        tl.to(".img-modal", 0.75, {
            clipPath: "clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);",
            ease: "power4.inOut",
            pointerEvents: "auto",
        });
        tl.to(".img-modal .img", 0.75, {
            clipPath: "clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);",
            ease: "power4.inOut",

        });

        tl.to(
            ".modal-item p",
            1,
            {
                top: 0,
                ease: "power4.inOut",
                stagger: {
                    amount: 0.2,
                },
            },
            "<"
        ).reverse();
    }
});
