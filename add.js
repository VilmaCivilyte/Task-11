const BASE_URL = "https://melon-potent-period.glitch.me/skills";

async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    alert(response.ok ? "Success" : "Error");

    if (response.ok) {
      window.location.href = "/index.html";
    }
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("add-skill-button").addEventListener("click", () => {
  const itemSkill = document.getElementById("skill-add-input").value;

  if (itemSkill) {
    const data = {
      skill: itemSkill,
    };

    postData(BASE_URL, data);
  } else {
    alert("Insert skill");
  }
});
