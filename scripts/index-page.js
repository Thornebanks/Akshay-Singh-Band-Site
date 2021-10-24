const api = "https://project-1-api.herokuapp.com/";
const key = "6771c106-cf18-40b2-a44a-fc3329e43d0e";

function getComments() {
  axios
    .get(`${api}comments?api_key=${key}`)
    .then((response) => {
      console.log(response);
      const sortedComments = response.data.sort(
        (a, b) => b.timestamp - a.timestamp
      );
      displayComment(sortedComments);
    })
    .catch((error) => {
      console.log(error);
    });
}
getComments();

const commentsForm = document.querySelector(".comments__form");
const commentsUnorder = document.querySelector(".comments-ul");

commentsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const comment = event.target.comment.value;
  const commenter = event.target.name.value;

  axios
    .post(`${api}comments?api_key=${key}`, {
      name: commenter,
      comment: comment,
    })
    .then((response) => {
      console.log(response);
      commentsUnorder.innerHTML = "";
      commentsForm.reset();
      getComments();
    })
    .catch((error) => {
      console.log(error);
    });
});

function displayComment(getComments) {
  for (let i = 0; i < getComments.length; i++) {
    const commentSection = document.createElement("li");
    commentSection.classList.add("comments-ul__reviews");
    commentSection.classList.add("review");
    commentsUnorder.appendChild(commentSection);

    const commentImg = document.createElement("div");
    commentImg.classList.add("comments__img");
    commentSection.appendChild(commentImg);

    const commentName = document.createElement("h4");
    commentName.innerText = getComments[i].name;
    commentName.classList.add("comments__reviewer");
    commentSection.appendChild(commentName);

    const commentDate = document.createElement("h5");
    commentDate.innerText = new Date(
      parseInt(getComments[i].timestamp)
    ).toLocaleDateString();
    commentDate.classList.add("comments__date");
    commentSection.appendChild(commentDate);

    const commentReview = document.createElement("p");
    commentReview.innerText = getComments[i].comment;
    commentReview.classList.add("comments__review");
    commentSection.appendChild(commentReview);

    commentsForm.appendChild(commentsUnorder);
  }
}

