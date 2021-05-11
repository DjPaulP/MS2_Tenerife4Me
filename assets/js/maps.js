function initMap () {
    var location = {lat: 28.064011, lng: -16.730419};
    var map = new google.maps.Map(document.getElementById("map"), {zoom: 11, center: location});
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

let map;

// Different set of locations

let beachesLocations = [{
        coords: {
            lat: 28.062002,
            lng: -16.734416
        }, // Playa de las Américas
        content: `<h4 class="info-head">Playa de las Américas</h4>
        <div class="info-content">
        <ul>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Showers<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-check beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 28.068299,
            lng: -16.732840
        }, // Playa de Troya
        content: `<h4 class="info-head">Playa de Troya</h4>
        <div class="info-content">
        <ul>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Showers<i class="fas fa-times beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-check beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 28.084979,
            lng: -16.736895
        }, // Fanabe Beach
        content: `<h4 class="info-head">Playa de Fanabe</h4>
        <div class="info-content">
        <ul>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Showers<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-times beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 28.079775,
            lng: -16.735196
        }, // Playa la Pinta
        content: `<h4 class="info-head">Playa la Pinta</h4>
        <div class="info-content">
        <ul>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Showers<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-check beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 28.091385,
            lng: -16.744083
        }, // Playa el Duque
        content: `<h4 class="info-head">Playa el Duque</h4>
        <div class="info-content">
        <ul>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Showers<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-times beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 28.051004,
            lng: -16.722282
        }, // Playa las Vistas
        content: `<h4 class="info-head">Playa las Vistas</h4>
        <div class="info-content">
        <ul>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Showers<i class="fas fa-times beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-check beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 28.050356,
            lng: -16.717902
        }, // Playa de Los Cristianos
        content: `<h4 class="info-head">Playa de Los Cristianos</h4>
        <div class="info-content">
        <ul>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Showers<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-times beach-info-list"></i></li>
        </ul>
        </div>`
    },
];

let resortsLocations = [{
        coords: {
            lat: 28.064011,
            lng: -16.730419
        }, // Playa de Las Americas
        content: `<h4 class="info-head">Playa de Las Americas</h4>
        <p>One of the most popular destinations, but it can get a bit hectic at night. If you love staying out 'til 4am, this is the place for you</p>
        <div class="info-content">Explore More:<span class="info-website"><a target="blank" href="https://www.tripadvisor.ie/Tourism-g562820-Playa_de_las_Americas_Arona_Tenerife_Canary_Islands-Vacations.html"></span>Playa de las Americas</a></div>`
    },
    {
        coords: {
            lat: 28.050449,
            lng: -16.717319
        }, // Los Cristianos
        content: `<h4 class="info-head">Los Cristianos</h4>
        <p>A popular destination for your relaxing vacation. Littered with great restaurants and bars, this is perfect for the older traveller and those with young children.</p>
        <div class="info-content">Explore More:<span class="info-website"><a target="blank" href="https://www.tripadvisor.ie/Tourism-g659661-Los_Cristianos_Arona_Tenerife_Canary_Islands-Vacations.html"></span>Los Cristianos</a></div>`
    },
];

let restaurantsLocations = [{
        coords: {
            lat: 28.054874,
            lng: -16.730243
        }, // The Las Vegas Grill
        content: `<h4 class="info-head">The Las Vegas Grill</h4>
        <h6 class="info-address">Av. las Américas, 38660 Playa de la Américas</h6>
        <div class="info-content">Phone:<span class="phone-num">+34 922 89 86 73</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.vegasgrilltenerife.com/"></span>http://www.vegasgrilltenerife.com/</a></div>`
    },
    {
        coords: {
            lat: 28.054674,
            lng: -16.731169
        }, // Hard Rock Cafe
        content: `<h4 class="info-head">The Hard Rock Cafe</h4>
        <h6 class="info-address"> Pirámide de Arona, Avda. Las Americas s/n, Playa de las Américas - Arona, Tenerife 38660 ES</h6>
        <div class="info-content">Phone:<span class="phone-num">+34 922 05 50 22</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.hardrockcafe.com/location/tenerife/"></span>https://www.hardrockcafe.com/location/tenerife/</a></div>`
    },
    {
        coords: {
            lat: 28.079055,
            lng: -16.733596
        }, // Harley's Restaurant
        content: `<h4 class="info-head">Harley's Restaurant</h4>
        <h6 class="info-address"> Av. de España, 338670 Adeje, Santa Cruz De Tenerife</h6>
        <div class="info-content">Phone:<span class="phone-num">+34 922 71 22 90</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.harleystenerife.com/"></span>https://www.harleystenerife.com/</a></div>`
    },
];

let themeparksLocations = [{
        coords: {
            lat: 28.071750,
            lng: -16.726960
        }, // Siam Park
        content: `<h4 class="info-head">Siam Park</h4>
        <h6 class="info-address">Avda. Siam Park s/n. Adeje</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 822 070 000</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.siampark.net/en/"></span>www.siampark.net/en/</a></div>`
    },
];

let hotelsLocations = [{
        coords: {
            lat: 28.121730,
            lng: -16.774910
        }, // Hard Rock Hotel
        content: `<h4 class="info-head">Hard Rock Hotel</h4>
        <h6 class="info-address">Avenida de Adeje 300, s/n38678 Playa Paraíso</h6>
        <div class="info-content">Phone: <span class="phone-num">1-855-537-4580</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://https://www.hardrockhotels.com/tenerife/"></span>www.hardrockhotels.com/tenerife/</a></div>`
    },
];

let barsLocations = [{
        coords: {
            lat: 28.078109,
            lng: -16.732557
        }, // The Temple Bar
        content: `<h4 class="info-head">Temple Bar</h4>
        <h6 class="info-address">Av. de Colón, 3, 38660 Costa Adeje, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Email: <span class="phone-num">templebar@outlook.com</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.facebook.com/templebartenerife/"></span>Temple Bar</a></div>`
    },
    
];

// Initialise map

function initMap(selectedLocations) {
    let myLatlng = {
        lat: 28.064011, 
        lng: -16.730419
    };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12.5,
        center: myLatlng,
        disableDefaultUI: true,
    });
//function initMap () {
//    var location = {lat: 28.064011, lng: -16.730419};
//    var map = new google.maps.Map(document.getElementById("map"), {zoom: 11, center: location});
//    var marker = new google.maps.Marker({
//        position: location,
//        map: map
//    });
//}
    // Change zoom level on smaller screen sizes

    if (window.screen.width < 768) {
        let myLatlng = {
            lat: 28.291565,
            lng: -16.629129
        };

        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: myLatlng,
            disableDefaultUI: true,
            
        });
    }

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Iterate through the array of locations and place the markers on the map

    if (selectedLocations) {
        for (let i = 0; i < selectedLocations.length; i++) {
            let marker = new google.maps.Marker({
                position: selectedLocations[i].coords,
                map: map,
                animation: google.maps.Animation.DROP,
            });

            // Create info window

            const infowindow = new google.maps.InfoWindow({
                content: selectedLocations[i].content,
            });

            // Close previous info window when new info window opened

            google.maps.event.addListener(marker, 'click', function () {
                if (currentInfoWindow != null) {
                    currentInfoWindow.close();
                }

                infowindow.open(map, marker);
                currentInfoWindow = infowindow;
            });

            var currentInfoWindow = null;
        }
    }
}

// Event listeners for button options to drop markers and call functions to display top 3

document.getElementById("beaches").addEventListener("click", () => {
    initMap(beachesLocations);
    topThreeBeaches();
});
document.getElementById("resorts").addEventListener("click", () => {
    initMap(resortsLocations);
    topThreeResorts();
});
document.getElementById("restaurants").addEventListener("click", () => {
    initMap(restaurantsLocations);
    topThreeRestaurants();
});
document.getElementById("themeparks").addEventListener("click", () => {
    initMap(themeparksLocations);
    topThreeThemeparks();
});
document.getElementById("hotels").addEventListener("click", () => {
    initMap(hotelsLocations);
    topThreeHotels();
});
document.getElementById("bars").addEventListener("click", () => {
    initMap(barsLocations);
    topThreeBars();
});

// Functions to display top 3 recommendations

function topThreeBeaches() {
    clearFavs();
    document.getElementById("beaches-favs").style.display = "block";
}

function topThreeResorts() {
    clearFavs();
    document.getElementById("resorts-favs").style.display = "block";
}

function topThreeRestaurants() {
    clearFavs();
    document.getElementById("restaurants-favs").style.display = "block";
}

function topThreeThemeparks() {
    clearFavs();
    document.getElementById("themeparks-favs").style.display = "block";
}

function topThreeHotels() {
    clearFavs();
    document.getElementById("hotels-favs").style.display = "block";
}

function topThreeBars() {
    clearFavs();
    document.getElementById("bars-favs").style.display = "block";
}

// Function to clear previous display of top 3 recommendations

function clearFavs() {
    document.getElementById("beaches-favs").style.display = "none";
    document.getElementById("resorts-favs").style.display = "none";
    document.getElementById("restaurants-favs").style.display = "none";
    document.getElementById("themeparks-favs").style.display = "none";
    document.getElementById("hotels-favs").style.display = "none";
    document.getElementById("bars-favs").style.display = "none";
}




