var alindicu = window.alindicu = window.alindicu || {};

alindicu.MainViewModel = function () {
    var self = this;

    self.mariage = ko.observable(new alindicu.MariageViewModel('le 2 Juillet 2016'));
};