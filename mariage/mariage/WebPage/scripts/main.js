var alindicu = window.alindicu = window.alindicu || {};

alindicu.GoogleMap = function(divId, latitude, longitude) {
    new google.maps.Map(document.getElementById(divId), {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 18,
        scrollwheel: false,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.HYBRID
    });
};

function initializeGoogleMaps() {
    new alindicu.GoogleMap('map-mairie', 45.766450, 4.879592);
    new alindicu.GoogleMap('map-eglise', 45.791826, 4.824995);
}

ko.applyBindings(new alindicu.MainViewModel());