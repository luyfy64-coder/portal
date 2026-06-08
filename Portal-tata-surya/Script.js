fetch("planets.xml")
  .then(res => res.text())
  .then(data => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "text/xml");
    const planets = xml.getElementsByTagName("planet");

    const container = document.getElementById("planetContainer");

    for (let i = 0; i < planets.length; i++) {
      const name = planets[i].getElementsByTagName("name")[0].textContent;
      const image = planets[i].getElementsByTagName("image")[0].textContent;
      const desc = planets[i].getElementsByTagName("description")[0].textContent;

      const div = document.createElement("div");
      div.className = "planet";
      div.style.backgroundImage = `url('${image}')`;

      div.onclick = () => {
        const info = document.getElementById("infoBox");
        info.style.display = "block";
        info.innerHTML = `<h2>${name}</h2><p>${desc}</p>`;
      };

      container.appendChild(div);
    }
  });
