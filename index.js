const BASE_URL = "https://melon-potent-period.glitch.me/skills";
const BASE_URL1 = "https://melon-potent-period.glitch.me/skill";

async function getData(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
      return null;
    });
}

console.log(getData());

async function getDataFromUrl(url) {
  const data = await getData(url);
  drawDataInfo(data);
  console.log(data);
}

async function deleteData(url) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    alert(response.ok ? "Success" : "Error");

    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}

function drawDataInfo(data) {
  const tbody = document.querySelector("tbody");
  tbody.classList.add("tbody-style");

  data.forEach((dataItem) => {
    const ID = document.createElement("td");
    ID.textContent = dataItem.id;

    const skill = document.createElement("td");
    skill.textContent = dataItem.skill;

    const deleteLink = document.createElement("button");
    deleteLink.textContent = "delete";
    deleteLink.classList.add("delete-link-button");
    deleteLink.addEventListener("click", () => {
      deleteData(BASE_URL1 + "/" + dataItem.id);
    });

    const tr = document.createElement("tr");
    tr.append(ID, skill, deleteLink);
    tbody.append(tr);
  });
}

getDataFromUrl(BASE_URL);
