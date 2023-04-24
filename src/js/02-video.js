//2. Añada la biblioteca como dependencia del proyecto a través de npm.
import Player from '@vimeo/player';

//7. Añada una biblioteca al proyecto lodash.throttle y asegúrese que el tiempo de reproducción
//   se actualice en la memoria no más de una vez por por segundo.
let throttle = require('lodash.throttle');

//Selector del video
const video = document.querySelector('#vimeo-player');
//Pasa el elemento video al constructor Vimeo.Player
const player = new Player(video);

//5. Guarde el tiempo de reproducción en el almacenamiento local. Deje que la clave sea la secuencia "videoplayer-current-time".
//7. Añada una biblioteca al proyecto lodash.throttle y asegúrese que el tiempo de reproducción se actualice en la memoria no más
//  de una vez por por segundo.
const setCurrentTime = throttle(event => localStorage.setItem('videoplayer-current-time', event.seconds), 1000);

//4. Ordene la documentación del método on() y empiece a seguir el evento timeupdate, actualización del tiempo de reproducción.
player.on('timeupdate', setCurrentTime);

//6. Al recargar la página, use el método setCurrentTime() para reanudar la reproducción desde la posición guardada.
const getCurrentTime = localStorage.getItem('videoplayer-current-time') || 0;
player.setCurrentTime(getCurrentTime);

