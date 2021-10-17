const details = [
  {
    when: "Mon Sept 06 2021",
    where: "Ronald Lane",
    city: "San Francisco, CA",
  },
  {
    when: "Tue Sept 21 2021 ",
    where: "Pier 3 East",
    city: "San Francisco, CA",
  },
  {
    when: "Fri Oct 15 2021",
    where: "View Lounge",
    city: "San Francisco, CA",
  },
  {
    when: "Sat Nov 06 2021 ",
    where: "Hyatt Agency",
    city: "San Francisco, CA",
  },
  {
    when: "Fri Nov 26 2021",
    where: "Moscow Center",
    city: "San Francisco, CA",
  },
  {
    when: "Wed Dec 15 2021 ",
    where: "Press Club",
    city: "San Francisco, CA",
  },
];
const shows = document.querySelector('.shows');

function listShows() {
  for (let i = 0; i < details.length; i++) {
    const showsList = document.createElement("li");
    showsList.classList.add('shows-list__details')
    showsList.classList.add('shows');
    shows.appendChild(showsList);

    const firstDate = document.createElement('h5');
    firstDate.innerHTML = 'DATE';
    showsList.appendChild(firstDate);
    
    const dateParagraph = document.createElement('p');
    dateParagraph.innerHTML = details[i].when;
    showsList.appendChild(dateParagraph);

    const firstVenue = document.createElement('h5');
    firstVenue.innerHTML = 'VENUE';
    showsList.appendChild(firstVenue);

    const venueParagraph = document.createElement('p');
    venueParagraph.innerHTML = details[i].where;
    showsList.appendChild(venueParagraph);

    const firstLocation = document.createElement('h5');
    firstLocation.innerHTML = 'LOCATION';
    showsList.appendChild(firstLocation);

    const locationParagraph = document.createElement('p');
    locationParagraph.innerHTML = details[i].city;
    showsList.appendChild(locationParagraph);

    const buyBtn = document.createElement('a');
    buyBtn.innerText = 'BUY TICKETS';
    buyBtn.setAttribute('href', '#');
    buyBtn.classList.add('show__btn');
    buyBtn.addEventListener('click', function(event){
        event.preventDefault();
    });
    showsList.appendChild(buyBtn);

  }
}
listShows();