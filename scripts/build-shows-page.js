const api = "https://project-1-api.herokuapp.com/";
const key = "6771c106-cf18-40b2-a44a-fc3329e43d0e";

function getShows() {
  axios.get(`${api}showdates?api_key=${key}`)
  .then((response) => {
    console.log(response);
    listShows(response.data);
  })
  .catch((error) => {
    console.log(error);
  })
}
getShows();

const shows = document.querySelector(".shows");

function listShows(newShows) {
  for (let i = 0; i < newShows.length; i++) {
    const showsList = document.createElement("li");
    showsList.classList.add("shows-list__details");
    showsList.classList.add("shows");
    shows.appendChild(showsList);

    const firstDate = document.createElement("h5");
    firstDate.innerHTML = "DATE";
    firstDate.classList.add("shows__dates");
    showsList.appendChild(firstDate);

    const dateParagraph = document.createElement("p");
    dateParagraph.classList.add("shows__paragraph");
    dateParagraph.innerHTML = new Date(parseInt(newShows[i].date)).toLocaleDateString();
    showsList.appendChild(dateParagraph);

    const firstVenue = document.createElement("h5");
    firstVenue.innerHTML = "VENUE";
    firstVenue.classList.add("shows__venue");
    showsList.appendChild(firstVenue);

    const venueParagraph = document.createElement("p");
    venueParagraph.classList.add("shows__para");
    venueParagraph.innerHTML = newShows[i].place;
    showsList.appendChild(venueParagraph);

    const firstLocation = document.createElement("h5");
    firstLocation.innerHTML = "LOCATION";
    firstLocation.classList.add("shows__location");
    showsList.appendChild(firstLocation);

    const locationParagraph = document.createElement("p");
    locationParagraph.classList.add("shows__local");
    locationParagraph.innerHTML = newShows[i].location;
    showsList.appendChild(locationParagraph);

    const buyBtn = document.createElement("a");
    buyBtn.innerText = "BUY TICKETS";
    buyBtn.setAttribute("href", "#");
    buyBtn.classList.add("shows__btn");
    buyBtn.addEventListener("click", function (event) {
      event.preventDefault();
    });
    showsList.appendChild(buyBtn);
  }
}

