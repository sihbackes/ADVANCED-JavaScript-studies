//! First step: we create a async function to GET the data ou of the API
//! use the word ASYNC before the function
//! inside of the function we need open the try{} and catch(){}
//!like this
//?   async function getData(category){
//?     try{}
//?     catch(){}
//?   }
//! inside of the try we need to create a variavle response to keep the data comig from the fech
//! but before the word fetch we use AWAIT
//! like this
//? const response = await fetch()
//! inside of the parentheses we gonna put the API link and the headers, if necessary
//! if we have the headers, we put a coma first, then open curly braces, put the word headers:{} and inside we put the authorization
//! on the las line before catch, we create a variable to keep the data coming fom response
//!like this
//?const movies = await response.json();

async function getData(category) {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/movies/${category}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjNjMGQ0YmUzZDAwMTU4NDVmZTYiLCJpYXQiOjE2NjgwODQ2NzIsImV4cCI6MTY2OTI5NDI3Mn0.th59j7oiC_O44r-9CiBPXT06JHcIRfYqdq_Ew_isJJk",
        },
      }
    );
    const movies = await response.json();
    displayMovies(movies);
  } catch (err) {
    console.log(err.message);
  }
}

async function displayMovies(movies) {
  const list = document.querySelector(".list-container");
  movies.forEach((element) => {
    list.innerHTML += `<li onclick='selectedMovies(event)'>${element.name}</li>`;
  });
}

let newList = [];
const selectedMovies = (clickEvent) => {
  clickEvent.target.classList.toggle("clicked");
  let title = clickEvent.target.innerText;
  if (!newList.includes(title)) {
    newList.push(title);
    renderList();
  } else {
    newList = newList.filter((element) => element !== title);
    renderList();
  }
};

const selectedMoviesList = document.querySelector(".selected-movies");

const renderList = () => {
  selectedMoviesList.innerHTML = "";
  newList.forEach((element) => {
    selectedMoviesList.innerHTML += `<li>${element}</li>`;
  });
};
getData("horror");
