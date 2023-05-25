const testimonios = [
  "Un lugar escondido con profesionales talentosos y creativos. Diseños únicos y de moda. Productos de alta calidad y duraderos. Mi nuevo lugar favorito para consentir mis manos y pies.",
  "Las técnicas son expertas y hacen un trabajo impecable. El ambiente es relajante y acogedor. Siempre me siento mimada y consentida cada vez que voy. ¡El mejor salón de uñas en la ciudad!",
  "El personal es amable y profesional. Siempre me hacen sentir bienvenida. Sus servicios son excelentes y siempre salgo con uñas hermosas y bien cuidadas. ¡Definitivamente volveré!",
  "El personal es encantador y profesional. Siempre obtengo hermosos diseños de uñas y un servicio impecable. ¡Es el lugar perfecto para relajarme y consentirme a mí misma!",
  "No puedo recomendar este salón de uñas lo suficiente. Las técnicas son expertas y amables. Siempre salgo con uñas fabulosas y bien cuidadas. ¡Una experiencia increíble en cada visita!",
  "¡El mejor salón de uñas de la ciudad! El personal es amigable y talentoso. Sus diseños de uñas son creativos y de moda. Siempre me siento mimada y lista para brillar.",
  "Este salón de uñas es mi lugar de escape. El ambiente es relajante y acogedor. Las técnicas son profesionales y siempre me dan resultados asombrosos. ¡No puedo esperar para volver!",
  "¡Increíble servicio de uñas! El personal es amable y atento. Siempre me siento bienvenida y cuidada. Sus productos de alta calidad y técnicas expertas hacen maravillas en mis uñas. ¡Totalmente recomendado!",
  "¡Este salón de uñas es una joya! Las técnicas son hábiles y perfeccionistas. Siempre se toman el tiempo para hacer un trabajo impecable. ¡Me encanta la variedad de opciones y diseños que ofrecen!",
  "Este salón de uñas es increíble. El ambiente es único. Las técnicas me dan resultados asombrosos. ¡Hasta la próxima!",
] 

// Genera valores aleatorios para las variables
let ran1 = Math.floor(Math.random() * 9);
let ran2 = Math.floor(Math.random() * 9);
let ran3 = Math.floor(Math.random() * 9);

// Revisa que no esten duplicados
while (ran2 === ran1) {
  ran2 = Math.floor(Math.random() * 9);
}
while (ran3 === ran1 || ran3 === ran2) {
  ran3 = Math.floor(Math.random() * 9);
}

//Llama api
function staff(img, name, test, ran) {
  axios
    .get('https://randomuser.me/api')
    .then(function (response) {
      let { gender, email } = response.data.results[0];
      let { first } = response.data.results[0].name;
      let { large } = response.data.results[0].picture;

      // Verificar si el género es masculino y volver a llamar a la función si es así
      if (gender === 'male') {
        staff(img, name, test, ran);
      } else {
        document.getElementById(img).src = large;
        document.getElementById(name).textContent = first;
        document.getElementById(test).textContent = testimonios[ran]
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}


// Llamar a la función con los IDs de los elementos del DOM
staff('t-1-i', 't-1-n', "t-1-t", ran1);
staff('t-2-i', 't-2-n', "t-2-t", ran2);
staff('t-3-i', 't-3-n', "t-3-t", ran3);
