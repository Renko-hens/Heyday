const inputRouteMap = document.querySelector(`#routeMapDelivery`);

if (inputRouteMap) {
  const routeMap = document.querySelector(`.route-map`);
  const routePrice = document.querySelector(`.form__route-price`);
  const summaryDelivery = document.querySelector(`.summary__value--delivery`)
  const buttonClean = routeMap.querySelector(`.input-close`);

    ymaps.load(init);

    function init() {
        const coordStore = [55.758541, 37.611748];
        const kek = document.querySelector(`.list-kek`);
                
        const map = new ymaps.Map("route-map-delivery", {
              center: coordStore,
              controls: [],
              zoom: 14,
        });

        const zoomControl = new ymaps.control.ZoomControl({
          options: {
            position: {
              top: 300,
              left: 10,
            }
          }
        });

        map.controls.add(zoomControl);

        if (window.innerWidth < 1024) {
          zoomControl.options.set('size', 'medium');
          
          zoomControl.options.set('position', {
            top: 250,
            left: 10,
          });
        }

        if (window.innerWidth < 540) {
          zoomControl.options.set('size', 'small');

          zoomControl.options.set('position', {
            top: 230,
            left: 10,
          });
        }

        const addPlacemark = (ymaps, coords) => (
          new ymaps.Placemark(coords, {}, {
              iconLayout: 'default#image',
              iconImageHref: './assets/img/icons/subtract.svg ',
              iconImageSize: [30, 45],
              iconImageOffset: [-15, -50]
          })
        );

        const setPlacemark = (ymaps, coords) => {
            let placemark = null;
            map.geoObjects.each(geoObject => {
                if(geoObject.geometry.getType() === 'Point'){
                    placemark = geoObject;
                }
            });
            if (placemark) {
                placemark.geometry.setCoordinates(coords);

                map.setCenter(coords, map.getZoom(), {
                  duration: 200
                });
            } else {
                placemark = addPlacemark(ymaps, coords);
                map.geoObjects.add(placemark);
            }
        };
        
      // это проверка входит ли адрес в зону доставки
      const checkAddress = (geoObject, userAddress, coords) => {
          if (!geoObject.geometry.contains(coords)){
            routePrice.textContent = `Стоимость доставки: 100 рублей за километр за пределами МКАД.`;
            summaryDelivery.textContent = `100₽/1км`;
          } else {
            routePrice.textContent = `Стоимость доставки: бесплатно`
            summaryDelivery.textContent = `бесплатно`
          }
      };


      const suggestView = new ymaps.SuggestView(inputRouteMap, {
        // куда можно вставить подсказки 
        container: kek,

        // Зона поиска (Приоритеты расставляет)
        boundedBy: [[40.61915243707144,56.94745277924047], [35.18145645699961,54.23668817978836]],        
        // Выдает результаты
        results: 5,
        zIndex: 10,
        // Форматирование подсказки в результатах
        provider: {
              suggest: (request, options) => {
                const copyOptions = {
                    options,
                }
                delete copyOptions['provider'];
                delete copyOptions['strictBounds'];
                return ymaps.suggest(request, copyOptions).then(items => {
                    let arrayResult = [];
                    let arrayPromises = [];
                    function pushGeoData(displayName, value, jsonData) {
                        arrayResult.push({displayName: displayName, value: value, jsonData: jsonData});
                    }
                    items.forEach(i => {
                        arrayPromises.push(ymaps.geocode(i.value).then(gc => {
                            let displayName = "";
                            let value = i.value;
                            if (!i.value.match(/.*подъезд.*/)) {
                                let geoObject = gc.geoObjects.get(0);
                                if (geoObject) {
                                    let jsonData = JSON.stringify({
                                        'city': geoObject.getLocalities()[0] || geoObject.getAdministrativeAreas()[0],
                                        'street': geoObject.getThoroughfare() || geoObject.getLocalities()[0],
                                        'house': geoObject.getPremiseNumber(),
                                    });
                                    if (geoObject.getCountryCode() == "RU") {
                                        value = value.replace(geoObject.getCountry()+", ", "");
                                        value = value.replace(geoObject.getAdministrativeAreas()[0]+", ", "");
                                        displayName = "<div class='yandex-map-address_info'>"+value+ geoObject.getCountry()+", "+geoObject.getLocalities()[0]+"</div>";
                                        value = value.replace("undefined", "");
                                        displayName = displayName.replace("undefined", "");
                                        pushGeoData(displayName, value, jsonData);
                                    }
                                }
                            }
                        }));
                    });
                    return Promise.all(arrayPromises).then(function(){
                        return ymaps.vow.resolve(arrayResult);
                    });
                });
            }
        }
    });
  
    map.behaviors.disable('scrollZoom');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      map.behaviors.disable('drag');
    }

    const polygonCoords = [[37.53783252343745,55.907211540476844],[37.53196669905978,55.90706620132023],[37.52115203231175,55.90330539300506],[37.50347091048557,55.89558976828328],[37.48458815902072,55.887969076501484],[37.4667353758176,55.88275913122285],[37.45111419051486,55.88275913122285],[37.41952849715548,55.87446036102884],[37.40425063460666,55.86741465816838],[37.39533752357103,55.855883010696985],[37.393105925670646,55.85192409219891],[37.38804191505052,55.851465410826115],[37.38359557240245,55.84781901632954],[37.378531561782346,55.84800009246911],[37.37535582630866,55.848591601975514],[37.37312422840831,55.84796387731407],[37.369691000869246,55.8496055972467],[37.367201910903425,55.851730072616064],[37.36668692677258,55.853178511679644],[37.364798651626096,55.85366131265319],[37.36471282093762,55.85588211954622],[37.36102210133312,55.85766832825082],[37.35776053517101,55.856026950351],[37.35535727589366,55.85622005724743],[37.347117529799924,55.861481849224866],[37.34408287692552,55.85887384038979],[37.34253792453295,55.85530145182933],[37.343138739352284,55.84873512077751],[37.35300926852709,55.842795494171426],[37.35858826327805,55.84004267521593],[37.36493973422533,55.83931821664711],[37.37180618930347,55.84149155170462],[37.38038925815115,55.837676060361275],[37.38236336398611,55.831613968648966],[37.37958983307449,55.82902084515598],[37.37615660553543,55.81529822290836],[37.37323836212724,55.807468352661914],[37.37117842560378,55.79808975986727],[37.370148457342076,55.78571041235794],[37.36843184357254,55.77139186580435],[37.36843184357254,55.75474475397192],[37.37409666901205,55.737218863942665],[37.38611296539876,55.712901919905526],[37.397619422807765,55.70284445091941],[37.412553962602665,55.69111347480233],[37.41512888325697,55.684907231300706],[37.432638343706245,55.662498341055795],[37.44808786763201,55.64803728222328],[37.456533024566774,55.64086185921584],[37.45627362122984,55.63753099207483],[37.4498477967254,55.63455859328687],[37.442401369862345,55.63485260547067],[37.43714958663462,55.63670294754392],[37.43274155734347,55.63263530769406],[37.43037556806118,55.63112159479402],[37.43976264077769,55.62843391738627],[37.44443251702609,55.62709775934599],[37.448684297354866,55.625639422882365],[37.45161488732021,55.62501806796086],[37.46028815609178,55.62555306864758],[37.47012013915782,55.62448543818483],[37.475622041691224,55.625458318670816],[37.481304344072456,55.62079905360515],[37.48877161396991,55.6136586190465],[37.490230735674004,55.610743780620034],[37.486690219774395,55.603419288878726],[37.4915181960012,55.60111112128663],[37.49834173573508,55.60120831004137],[37.501238521471166,55.6026539642172],[37.502912219896444,55.60080740488175],[37.505658801927716,55.598474784087415],[37.53587120427147,55.58953178064748],[37.58925789250389,55.576794188718466],[37.62580543247748,55.57383345147522],[37.675072247663024,55.57169374479265],[37.731720502057605,55.592405075526635],[37.75403648106151,55.60144460955946],[37.81438660107934,55.63648286672814],[37.833955998052005,55.648909795704114],[37.83696007214865,55.650038217134515],[37.841927523244195,55.651786902508654],[37.84393381558734,55.65232226058018],[37.84660529576616,55.65169287284427],[37.849807853329985,55.65251865779838],[37.850121671784734,55.65448447124903],[37.84963485084852,55.65486075114185],[37.850049252141325,55.65574655844066],[37.847560162175476,55.65946472017694],[37.84510590586957,55.66004175590031],[37.84222249612131,55.65974540642207],[37.839931819508124,55.65825502952141],[37.840071154147935,55.66172766627585],[37.83773254834498,55.66899809156235],[37.83309769116725,55.68151164887727],[37.82983612500514,55.68873663971913],[37.829921955693614,55.697172180654555],[37.83155273877468,55.70129232632328],[37.837565042444986,55.7123557074327],[37.83893833346061,55.71928429204436],[37.843557926338036,55.73099693236539],[37.84574660889423,55.737534801516645],[37.848407360237054,55.74460414823591],[37.84643325440209,55.745645073532636],[37.84780654541771,55.75043781156779],[37.84643325440209,55.755883387090826],[37.846996064485154,55.76178450093799],[37.851888413728304,55.765026788212595],[37.843777413667354,55.77095415073422],[37.8403441861283,55.80210025903162],[37.837597604097056,55.82152972021168],[37.83227610141151,55.82771417098849],[37.77785944491749,55.855894062246186],[37.75399851352098,55.868226872423996],[37.740222688020495,55.87527242732078],[37.72734808474905,55.881641276164636],[37.71537470370657,55.88788848333103],[37.70704912692434,55.89172314120264],[37.700783486665564,55.893748844574596],[37.69361662417782,55.8947134279084],[37.68318819552791,55.8950992544967],[37.66997026950253,55.89541273576911],[37.657290289549934,55.89617451938105],[37.640338728575884,55.89786241843883],[37.640488932280725,55.898971569086676],[37.64276344552537,55.900080687889606],[37.64340717568894,55.900876340457465],[37.643020937590784,55.90200951430715],[37.642312834410845,55.902829236369655],[37.64196951165695,55.90327525430149],[37.63896543756026,55.904131112124944],[37.63836462274092,55.9038177016017],[37.63596136346362,55.905071328442],[37.630403826384764,55.903926190154024],[37.62523252740406,55.903106491378345],[37.61615593209767,55.904131112137854],[37.615299132749676,55.90262390373965],[37.60079374639716,55.90652942013117],[37.586803344175486,55.910097077554134],[37.57928874597163,55.91102017666641],[37.56855990991207,55.91044167385181],[37.550878788085896,55.90865790225906],[37.53783252343745,55.907211540476844]];

    const reversePolygonCoords = (arr) => {
      const reverseCoords = arr.map((childArr) => {
        const firstChild = childArr[0];
        const lastChild = childArr[1];
        
        childArr[0] = lastChild;
        childArr[1] = firstChild;
        
        return childArr;
      });

      return reverseCoords;
    };


    // json
    let geoObject = new ymaps.Polygon(
            [
              reversePolygonCoords(polygonCoords),
            ],
            {},
            {
              interactivityModel: 'default#transparent',
              fillColor: '#56db40',
              strokeColor: '#56db40',
              opacity: 0.5,
              strokeWidth: 1
            }
        );
  
    if(geoObject) map.geoObjects.add(geoObject);
  
    suggestView.events.add('select', (item) => {
        const value = item.get('item').value;

        if (value) {
          ymaps.geocode(value).then((res) => {
            const coords = res.geoObjects.get(0).geometry.getCoordinates();
            setPlacemark(ymaps, coords);
            checkAddress(geoObject, value, coords);
        });
        }
    });
  
  
    map.events.add('click', function (e) {
      const coords = e.get('coords');
        let userAddress = null;
        setPlacemark(ymaps, coords);
        let geoObject = null;
        map.geoObjects.each(currentGeoObject => {
            if(currentGeoObject.geometry.getType() === 'Polygon' || currentGeoObject.geometry.getType() === 'Circle'){
                geoObject = currentGeoObject;
            }
        });
        ymaps.geocode(coords).then((res) => {
            const firstGeoObject = res.geoObjects.get(0);
            userAddress = firstGeoObject.getAddressLine();
            userAddress = userAddress.replace(firstGeoObject.getCountry()+", ", "");
            userAddress = userAddress.replace(firstGeoObject.getAdministrativeAreas()[0]+", ", "");
            userAddress = userAddress.replace("undefined", "");
            
            inputRouteMap.value = userAddress;

            checkAddress(geoObject, userAddress, coords);
        });
    });


    routeMapDelivery.addEventListener(`input`, (evt) => {

      if (evt.data === null || evt.data === ` `) {
        buttonClean.style.display = `none`;
      } else {
        buttonClean.style.display = `flex`;
      }
    });

    buttonClean.addEventListener(`click`, () => {
      routeMapDelivery.value = ``;
      buttonClean.style.display = `none`;
    });

      
    const openMapButton = document.querySelector(`.form__route-button`);

    openMapButton.addEventListener(`click`, () => {
      const popupMap = document.querySelector(`.route-map--delivery`);
      const closeButtonMap = document.querySelector(`.button-close-popup`);
      const saveButtonMap = document.querySelector(`#saveRouteDeliveryInput`);

      popupMap.classList.remove(`route-map--hide`);

      closeButtonMap.addEventListener(`click`, () => {
        popupMap.classList.add(`route-map--hide`);
      });

      saveButtonMap.addEventListener(`click`, () => {
        const inputRouteDelivery = document.querySelector(`#routeMapDelivery`);
        const inputAddress = document.querySelector(`.form__route[name="route"]`);

        if (inputRouteDelivery.value !== `` && inputRouteDelivery.value !== ` `) {
          inputAddress.value = inputRouteDelivery.value;
        }  
        
        popupMap.classList.add(`route-map--hide`);
      });
    });

  }
}


