require([//require позволяет загружать модули из библиотеки JavaScript. 
    "esri/Map",// загружает код, специфичный для создания карты
    "esri/views/SceneView",//загружает код, позволяющий просматривать карту в 3D. Включение этих строк в раздел require делает их доступными в других частях приложения.
    "esri/layers/TileLayer",//без этих строк будет ошибка о том что TileLayer не определен или недоступен Решение состоит в том, чтобы добавить TileLayer в раздел require и обратный вызов function в начале файла main.js.
    "esri/Basemap",//аналогично TileLayer
    "esri/layers/FeatureLayer",//аналогично TileLayer (Эти новые строки заставляют приложение загружать код из API JavaScript, который будет поддерживать добавление векторных слоев FeatureLayers и предотвращает ошибки, которые могли быть раньше. Поскольку приложение уже включает слои листов TileLayers, нам не нужно добавлять для них повторяющиеся строки здесь.)
    "esri/widgets/LayerList",//Виджет LayerList позволяет людям, использующим приложение, взаимодействовать со слоями (включать и выключать их), но он также помогает понять текущее состояние слоев: загрузка, видимость на текущем уровне масштабирования.
    "esri/request",
    "esri/Graphic",


    "dojo/domReady!" //  предписывает браузеру ждать выполнения кода до тех пор, пока не будет загружена вся страница.
    
    ], function ( 
        Map, 
        SceneView,
        TileLayer,//без этих строк будет ошибка о том что TileLayer не определен или недоступен Решение состоит в том, чтобы добавить TileLayer в раздел require и обратный вызов function в начале файла main.js.
        Basemap,//аналогично TileLayer
        FeatureLayer,//аналогично TileLayer (Эти новые строки заставляют приложение загружать код из API JavaScript, который будет поддерживать добавление векторных слоев FeatureLayers и предотвращает ошибки, которые могли быть раньше. Поскольку приложение уже включает слои листов TileLayers, нам не нужно добавлять для них повторяющиеся строки здесь.)
        LayerList,
        request,
        Graphic
        
        ) {  //это функция callback, которая вызывает классы Map и SceneView и др. после загрузки всего кода на странице.
        
        const satelliteLayer = new TileLayer({
            url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
            title: "satellite"
        })//Этот код создает слой с именем satelliteLayer, который является экземпляром класса TileLayer, устанавливает его для извлечения листов из определенного URL-адреса и присваивает ему название satellite.
        
        const fireflyLayer = new TileLayer({
            url: "https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/HalfEarthFirefly/MapServer",
            title: "half-earth-firefly"
        })//Этот код создает другой слой с именем fireflyLayer, который является экземпляром класса TileLayer, устанавливает его для извлечения листов из определенного URL-адреса и присваивает ему название half-earth-firefly.
        
        const basemap = new Basemap({
            baseLayers: [satelliteLayer, fireflyLayer],
            title: "half-earth-basemap",
            id: "half-earth-basemap"
        });//Этот код создает базовую карту, которая включает в себя два созданных вами слоя листов, и дает ей название half-earth-basemap.

        const rangelands = new TileLayer({
            url: 'https://tiles.arcgis.com/tiles/IkktFdUAcY3WrH25/arcgis/rest/services/gHM_Rangeland_inverted/MapServer'
        })//Этот код создает слой с именем rangelands, который является экземпляром класса TileLayer, и устанавливает его для извлечения листов из определенного URL-адреса.

        const protected = new FeatureLayer({
            url: 'https://services5.arcgis.com/Mj0hjvkNtV7NRhA7/arcgis/rest/services/WDPA_v0/FeatureServer/1'
        })//Этот код создает еще один новый слой с именем protected, который является экземпляром класса FeatureLayer, и устанавливает его для извлечения объектов из определенного элемента URL-адреса сервиса объектов. Мы можем найти URL-адрес для сервисов объектов, посмотрев на страницу описания их слоев ArcGIS Online. URL-адрес сервера находится в правой нижней части страницы описания элемента. В URL-адресе для этого сервиса сервис поступает из FeatureServer. URL-адрес заканчивается в /1, что указывает на то, что он является вторым элементом сервиса (элементы пронумерованы, начиная с 0, поэтому 0-первый элемент, а 1-второй). Первый элемент соответствует охраняемым зонам, обозначенным только как точки, в то время как второй (тот, который мы хотим для этого приложения) предоставляет полигоны.

        const map = new Map({
            basemap: basemap,//Теперь базовая карта будет использовать созданную нами базовую карту half-earth-basemap.
            layers: [protected, rangelands]//Этот код добавляет два новых слоя на карту

        });//создают экземпляр класса карты и устанавливают базовую карту для карты в базовую карту Снимки Esri по умолчанию. 
        
        const view = new SceneView({
            map: map,
            container: "sceneContainer",
            environment: {
                atmosphereEnabled: false,//отключают эффект атмосферы, который придавал глобусу ореол.
                background: {//сплошной цвет фона, используя нотацию RGB
                  type: "color",
                  color: [0,10,16]
                },
            },
            ui: {//Эти строки удаляют элементы управления по умолчанию, за исключением кнопок управления масштабированием.
                components: ["zoom"]
            }
            
        });//Эти строки создают экземпляр класса SceneView и устанавливают карту, которую будет отображать сцена, на карту, которую мы только что определили. Он также указывает, что этот класс SceneView помещается внутри элемента sceneContainer разделения HTML-страницы.
        const layerList = new LayerList({
            view: view
          });
          
          view.ui.add(layerList, {
            position: "top-right"
          });
       
        const uploadForm = document.getElementById("uploadForm");//Этот код создает элемент в коде JavaScipt с именем uploadForm и связывает его по значению id с uploadForm в файле HTML с помощью document.getElementById.

        uploadForm.addEventListener("change", function (event) {//код добавляет EventListener, отслеживающий действия, связанные с формой. В частности, он срабатывает, когда в форме происходит событие change.
        const filePath = event.target.value.toLowerCase();//преобразовывает путь к файлу входных данных в нижний регистр.
        if (filePath.indexOf(".zip") !== -1) {
            // Оператор if - это проверка того, является ли отправленный файл файлом .zip. Приложение обрабатывает только файлы .zip.
            // Предполагается, что это приложение будет использоваться доверенным кругом людей во внутренней сети организации, а не всеми пользователями сети. Для внешнего веб-приложения требуется большая безопасность.
            generateFeatureCollection(uploadForm)//Эта строка запускает функцию преобразования загруженных данных в коллекцию объектов ArcGIS.
        } 
        });
        function generateFeatureCollection(uploadFormNode) {//Этот код начинает задавать функцию для создания набора объектов. 
            const generateRequestParams = {//Запрос информирует сервер о том, что отправляемый файл является шейп-файлом. Он запрашивает коллекцию объектов с пространственной привязкой вида карты, заданной в виде строки JSON.
                filetype: "shapefile",
                  publishParameters: JSON.stringify({
                  targetSR: view.spatialReference
                }),
                f: "json"
            };
            request("https://www.arcgis.com/sharing/rest/content/features/generate", {//функция request позволит приложению взаимодействовать с сервером для получения ответа с помощью запроса GET. Сервис REST, который он использует, - это сервис generate, который преобразует загруженный шейп-файл в коллекцию объектов и возвращает его в качестве ответа на запрос.
                query: generateRequestParams,//Функция запроса принимает URL-адрес сервиса, к которому необходимо получить доступ, и объект с опциями запроса. Эта функция включает в себя константу generateRequestParams
                body: uploadFormNode,
                responseType: "json"
            }).then(function (response) {//Этот участок кода называется обещанием. Обещание - это действие, которое произойдет после выполнения запроса. В данном случае запрос состоит в создании коллекции объектов, а ответ, возвращаемый сервером, содержит эти данные в виде объекта JSON.
                addShapefileToMap(response.data.featureCollection);//вызывает функцию addShapefileToMap для данных из ответа

                  console.log(response)
                })
            }
            function createFeaturesGraphics(layer) {//создается новая функция с именем createFeaturesGraphics, которая выполняет итерацию JSON с сервера и создает графику для каждого объекта. Как только приложение создаст графику, мы собираем ее вместе, чтобы создать FeatureLayer. 
                console.log(layer)
                return layer.featureSet.features.map(function (feature) {
                  return Graphic.fromJSON(feature);
                });
            }
            function createFeatureLayerFromGraphic(graphics) {//принимает графику в качестве входных данных и возвращает новый FeatureLayer.
                return new FeatureLayer({
                  objectIdField: "FID",//создает новый векторный слой, подставляя для objectIDField значения FID (поле Object ID для шейп-файла), используя коллекцию графики в качестве исходных данных и присваивая название новому слою User uploaded shapefile. Этот заголовок будет отображаться в списке слоев вьюера при загрузке шейп-файла.
                  source: graphics,
                  title: 'User uploaded shapefile'
                });
            }
            function addShapefileToMap(featureCollection) {//добавит слой на карту//Эта функция называется addShapefileToMap. Она использует две другие функции для создания графики и создания слоя из этой графики. Затем она добавляет слой на карту, и вид карты центрируется на новом слое.
                let sourceGraphics = [];
                const collectionLayers = featureCollection.layers;
                const mapLayers = collectionLayers.map(function (layer) {
                  const graphics = createFeaturesGraphics(layer);
                  sourceGraphics = sourceGraphics.concat(graphics);
                  const featureLayer = createFeatureLayerFromGraphic(graphics)
                  return featureLayer;
                });
                map.addMany(mapLayers);
                view.goTo({target: sourceGraphics, tilt: 40});
              }
    }

    
);

