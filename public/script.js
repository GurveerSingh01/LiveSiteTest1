async function loadPage(page) {
    try {
        const response = await fetch(`/api/${page}`);
        if (!response.ok) throw new Error("Page not found");

        const data = await response.json();
        document.getElementById("content").innerText = data.message;

    } catch (err) {
        document.getElementById("content").innerText = "Error loading page";
    }
}

document.getElementById("home-button").onclick = () => {
  loadPage("home");
};

document.getElementById("about-button").onclick = () => {
  loadPage("about");
};