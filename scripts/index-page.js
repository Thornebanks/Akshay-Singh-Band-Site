const comments = [
    {
        img: '',
        name: 'Connor Walton',
        date: '02/17/2021',
        comment: 'This is art. This is inexplicable magic expressed in the purest     way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
    },
    {
        img: '',
        name: 'Emilie Beach',
        date: '01/09/2021',
        comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
    },
    {
        img: '',
        name: 'Miles Acosta',
        date: '12/20/2020',
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."

    },
];


const commentsForm = document.querySelector('.comments__form');
const commentsUnorder = document.querySelector('.comments-ul');

commentsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    const commenter = event.target.name.value;
    function createComment(){
        return{
            name: commenter,
            date: new Date(Date.now()).toLocaleDateString(),
            comment: comment,
        };
    }
    commentsUnorder.innerHTML = '';

    comments.unshift(createComment());
    displayComment(comments);
});

function displayComment() {
    for (let i = 0; i < comments.length; i++) {
        const commentSection = document.createElement('li');
        commentSection.classList.add('comments-ul__reviews');
        commentSection.classList.add('review');
        commentsUnorder.appendChild(commentSection);

        const commentImg = document.createElement('img');
        commentImg.classList.add('comments__img');
        commentImg.setAttribute('src', comments[i].img);
        commentSection.appendChild(commentImg);
      
        const commentName = document.createElement('h4');
        commentName.innerText = comments[i].name;
        commentName.classList.add('comments__reviewer');
        commentSection.appendChild(commentName);

        const commentDate = document.createElement('h5');
        commentDate.innerText = comments[i].date;
        commentDate.classList.add('comments__date');
        commentSection.appendChild(commentDate);

        const commentReview = document.createElement('p');
        commentReview.innerText = comments[i].comment;
        commentReview.classList.add('review__description');
        commentSection.appendChild(commentReview);
        
        commentsForm.appendChild(commentsUnorder);
        
    }
}
displayComment();

