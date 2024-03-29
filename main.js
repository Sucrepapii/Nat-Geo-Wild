const tabList = document.querySelector(".tabs");

tabList.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;

    const tabIndex = e.target.dataset.tab;
    if (!tabIndex) return;

    const tabs = document.querySelectorAll("[data-tab]");
    Array.from(tabs).forEach ((tab) => {
        if (tab.dataset.tab === tabIndex) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });
});