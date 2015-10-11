var alindicu = window.alindicu = window.alindicu || {};

alindicu.MainViewModel = function () {
    var self = this;

    self.mariage = ko.observable(new alindicu.MariageViewModel('le 2 Juillet 2016'));

    new alindicu.GoogleMap('map-mairie', 45.766450, 4.879592);
    new alindicu.GoogleMap('map-eglise', 45.791826, 4.824995);
};