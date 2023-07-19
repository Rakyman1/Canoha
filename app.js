const canoha = [
    {
      name: "Naruto",
      status: "Alive",
      rang: "Hokage",
      comand: "7",
      img: "https://wiki.jcdn.ru/w/images/thumb/0/07/NamikazeMenma.jpg/250px-NamikazeMenma.jpg",
      element: "Wind",
      type: "Bidju",
      clan: "Uzumaki",
      gender: "Male",
    },
    {
      name: "Saske",
      status: "Alive",
      rang: "Genin",
      comand: "7",
      img: "https://wiki.jcdn.ru/w/images/thumb/b/ba/SasukeGaiden.jpg/250px-SasukeGaiden.jpg",
      element: "Fier",
      type: "Genjutsu",
      clan: "Uchiha Ichizoku",
      gender: "Male",
    },
    {
      name: "Sakura",
      status: "Alive",
      rang: "Jonin",
      comand: "7",
      img: "https://wiki.jcdn.ru/w/images/thumb/f/f0/SakuraBorutoMovie.jpg/250px-SakuraBorutoMovie.jpg",
      element: "Water",
      type: "Medic",
      clan: "Ichizoku",
      gender: "famale",
    },
  
    {
      name: "Shikomaru",
      status: "Alive",
      rang: "Jonin",
      comand: "10",
      img: "https://wiki.jcdn.ru/w/images/thumb/a/af/ShikamaruAnime.jpg/250px-ShikamaruAnime.jpg",
      element: "Earth",
      type: "shadow",
      clan: "Nara",
      gender: "male",
    },
    {
      name: "Choji",
      status: "Alive",
      rang: "Jonin",
      comand: "10",
      img: "https://wiki.jcdn.ru/w/images/thumb/1/1d/Chouji_Boruto_The_next_generation.jpg/250px-Chouji_Boruto_The_next_generation.jpg",
      element: "Earth",
      type: "tranform",
      clan: "Akimichi",
      gender: "male",
    },
    {
      name: "Ino",
      status: "Alive",
      rang: "Jonin",
      comand: "10",
      img: "https://wiki.jcdn.ru/w/images/thumb/1/1b/InoAnime.jpg/250px-InoAnime.jpg",
      element: "Watter",
      type: "Sensor",
      clan: "Yamanaka",
      gender: "famale",
    },
    {
      name: "Rock Li",
      status: "alive",
      rang: "Jonin",
      comand: "11",
      img: "https://wiki.jcdn.ru/w/images/thumb/0/04/Rock_lee.png/250px-Rock_lee.png.jpeg",
      element: "Simple chakra",
      type: "leaf swir",
      clan: "Li",
      gender: "male",
    },
    {
      name: "Nedji",
      status: "dead",
      rang: "jonin",
      comand: "11",
      img: "https://wiki.jcdn.ru/w/images/thumb/7/79/Neji.png/250px-Neji.png.jpeg",
      element: "fire",
      type: "Dodjitsu",
      clan: "Hiuga",
      gender: "male",
    },
    {
      name: "Ten-Ten",
      status: "Alive",
      rang: "chunin",
      comand: "11",
      img: "https://wiki.jcdn.ru/w/images/thumb/f/fd/TentenLast.jpg/250px-TentenLast.jpg",
      element: "simple chakra",
      type: "seal",
      clan: "Hiuga",
      gender: "male",
    },
    {
      name: "Sai",
      status: "Alive",
      rang: "jonin",
      comand: "7",
      img: "https://wiki.jcdn.ru/w/images/thumb/1/10/SaiAnime.jpg/250px-SaiAnime.jpg",
      element: "earth",
      type: "art",
      clan:'Yamanaka Ichizoku',
      gender: 'Male',
    },
  ];

const slidesContainer = document.querySelector('.slides-container');
  const btnPrev = document.querySelector('.arrows[name="chevron-back-outline"]');
  const btnNext = document.querySelector('.arrows[name="chevron-forward-outline"]');
  
  let slideIndex = 0;
  
  function displayCharacterInfo(character) {
      const { name, status, rang, comand, element, type, clan, gender, img } = character;
      const slide = document.createElement('div');
      slide.classList.add('slide');
      slide.innerHTML = `
          <div class="slide-image">
              <img src="${img}" alt="${name}">
          </div>
          <div class="slide-details">
              <h2>${name}</h2>
              <p>Status: ${status}</p>
              <p>Rang: ${rang}</p>
              <p>Comand: ${comand}</p>
              <p>Element: ${element}</p>
              <p>Type: ${type}</p>
              <p>Clan: ${clan}</p>
              <p>Gender: ${gender}</p>
          </div>
      `;
      slidesContainer.appendChild(slide);
  }
  
  function displayOutput(characters) {
      characters.forEach(displayCharacterInfo);
      const slides = document.querySelectorAll('.slide');
      slides[0].classList.add('active');
  }
  
  function hideAllSlides() {
      const slides = document.querySelectorAll('.slide');
      slides.forEach(slide => {
          slide.style.display = 'none';
      });
  }
  
  function showSlide(slideIndex) {
      const slides = document.querySelectorAll('.slide');
      if (slideIndex >= 0 && slideIndex < slides.length) {
          hideAllSlides();
          slides[slideIndex].style.display = 'flex';
      }
  }
  
  function updateSlidePosition() {
      const slides = document.querySelectorAll('.slide');
      slidesContainer.style.transform = `translateX(-${slideIndex * 450}px)`;
  }
  
  btnPrev.addEventListener('click', () => {
      slideIndex = Math.max(slideIndex - 1, 0);
      showSlide(slideIndex);
  });
  
  btnNext.addEventListener('click', () => {
      const slides = document.querySelectorAll('.slide');
      if (slideIndex < slides.length - 1) {
          slideIndex++;
          showSlide(slideIndex);
      }
     else {
        slideIndex = 0; 
    }
    showSlide(slideIndex);

  });
  
  displayOutput(canoha);