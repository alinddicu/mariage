var alindicu = window.alindicu = window.alindicu || {};

alindicu.GoogleMap = function (divId, latitude, longitude) {
    new google.maps.Map(document.getElementById(divId), {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 18,
        scrollwheel: false,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.HYBRID
    });
};