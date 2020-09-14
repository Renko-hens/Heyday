if (document.querySelector('#main-map')){
  ymaps.load(init);
  function init(){
      // карта.
      var coord = [55.758541, 37.611748];
      var map = new ymaps.Map("main-map", {
          center: coord,
          controls: ['zoomControl'],
          zoom: 17,
      });

      if (window.innerWidth < 1260) {
        var coord = [55.758341, 37.613500];
        map.setCenter(coord); 
      }

      if (window.innerWidth < 912) {
        var coord = [55.758341, 37.61400];
        map.setCenter(coord); 
      }

      map.behaviors.disable('scrollZoom');
      
      const multiRoute = new ymaps.multiRouter.MultiRoute({   
          // Точки маршрута. Точки могут быть заданы как координатами, так и адресом. 
          referencePoints: [
              'Москва, метро Театральная, 9 выход',
              [55.758493, 37.613198],
          ],
          params: {
            // Тип маршрута: на общественном транспорте.
            routingMode: "pedestrian"  
          },
      }, {
        // Внешний вид путевых точек.
        wayPointStartIconColor: "#22A50C",
        wayPointStartIconFillColor: "#22A50C",
        //
        wayPointStartIconLayout: "default#image",
        wayPointStartIconImageHref: "/assets/img/icons/green-merto.png",
        wayPointStartIconImageSize: [18, 14],
        wayPointStartIconImageOffset: [5, -5],
        // 
        wayPointFinishIconLayout: "default#image",
        wayPointFinishIconImageHref: "/assets/img/icons/map-icon.png",
        wayPointFinishIconImageSize: [50, 65],
        wayPointFinishIconImageOffset: [-24, -65],
        // Внешний вид линии активного маршрута.
        routeActiveStrokeWidth: 4,
        routeActiveStrokeStyle: 'dashed',
        routeActiveStrokeColor: "#22A50C",
        // Внешний вид линий альтернативных маршрутов.
        routeStrokeStyle: 'dot',
        routeStrokeWidth: 3,
        boundsAutoApply: false
    });
      
      // Добавление маршрута на карту.
      map.geoObjects.add(multiRoute);

      var multiRoute2 = new ymaps.multiRouter.MultiRoute({   
          // Точки маршрута. Точки могут быть заданы как координатами, так и адресом. 
          referencePoints: [
              'Москва, метро Охотный ряд, выход 3',
              [55.758493, 37.613198],
          ],
          params: {
            // Тип маршрута: на общественном транспорте.
            routingMode: "pedestrian"  
          }
      }, {
          // Внешний вид путевых точек.
          wayPointStartIconColor: "#D80101",
          wayPointStartIconFillColor: "#D80101",
          // sas
          wayPointStartIconLayout: "default#image",
          wayPointStartIconImageHref: "/assets/img/icons/red-metro.png",
          wayPointStartIconImageSize: [18, 14],
          wayPointStartIconImageOffset: [-20, -5],
          // 
          wayPointFinishIconLayout: "default#image",
          wayPointFinishIconImageHref: "/assets/img/icons/map-icon.png",
          wayPointFinishIconImageSize: [0, 0],
          // Внешний вид линии активного маршрута.
          routeActiveStrokeWidth: 4,
          routeActiveStrokeStyle: 'dashed',
          routeActiveStrokeColor: "#D80101",
          // Внешний вид линий альтернативных маршрутов.
          routeStrokeStyle: 'dot',
          routeStrokeWidth: 3,
          boundsAutoApply: false,
      });
      map.geoObjects.add(multiRoute2);
  }
}