streetViewModulo = (function() {
  var paronama // 'Visor' de StreetView

  function inicializar() {
    /* Completar la función inicializar()  que crea un panorama
    en una posición y lo muestra en la página.
    Debe crear una instancia de StreetViewPanorama con una posición,
    el elemento HTML donde se mostrará el mapa. */
    panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: posicionCentral,
        pov: {
          heading: 34,
          pitch: 10
        }
      });


  }

  // Actualiza la ubicación del Panorama
  function fijarStreetView(ubicacion) {
    /* Completar la función fijarStreetView que actualiza la posición
     de la variable panorama y cambia el mapa de modo tal que se vea
     el streetView de la posición actual. */

    //Pista: La clase StreetViewPanorama y un método de la clase Map
    //te servirán para cumplir la consigna. Lee sobre estos en la documentación
    panorama.setPosition(ubicacion);

    mapa.setStreetView(panorama);

  }

  return {
    inicializar,
    fijarStreetView
  }
})()
