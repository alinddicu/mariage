var alindicu = window.alindicu = window.alindicu || {};

alindicu.MainViewModel = function () {
    var self = this;

    self.heureMairie = '10h45';
    self.heureEglise = '14hH30';
    self.heureRestaurant = '18h30';
    self.lang = ko.observable('ro');
    
    var frMariageData = new alindicu.MariageViewModel(
        ' et ',
        '2 Juillet 2016',
        'à Lyon',
        'A la mairie',
        '25 Juin 2016',
        'La cérémonie se tiendra à ',
        ' à la',
        'Mairie de Villeurbanne',
        '3, Place du Dr Lazare Goujon, 69100 Villeurbanne',
        'Parkings payants',
        '17, rue Michel Servet (air libre), Villeurbanne',
        '38, bis rue Michel Servet (couvert), Villeurbanne',
        'A l\'église',
        '2 Juillet 2016',
        'La cérémonie se tiendra ',
        ' à',
        'l\'Eglise Orthodoxe Grecque',
        '45, Rue Père Chevrier, 69007 Lyon',
        'Parking gratuit : dans la cour de l\'église',
        'Au restaurant',
        '2 Juillet 2016',
        'Nous allons faire la fête à ',
        ' au',
        'Restaurant  "Chez nous"',
        'Route  Départementale  D61  (01)  Ain, Sainte Croix, 01120',
        'Parking gratuit : devant le restaurant',
        '(*)Les heures sont approximatives et seront mises à jour prochainement');

        var roMariageData = new alindicu.MariageViewModel(
        ' si ',
        '2 Iulie 2016',
        'la Lyon',
        'La primarie',
        '25 Iunie 2016',
        'Ceremonia se va tine la ',
        ' la',
        'Primaria Villeurbanne',
        '3, Place du Dr Lazare Goujon, 69100 Villeurbanne',
        'Parcare cu plata',
        '17, rue Michel Servet (aer liber), Villeurbanne',
        '38, bis rue Michel Servet (acoperit), Villeurbanne',
        'La biserica',
        '2 Iulie 2016',
        'Ceremonia se va tine la ora ',
        ' la',
        'Biserica ortodoxa greaca',
        '45, Rue Père Chevrier, 69007 Lyon',
        'Parcare gratuita : in curtea bisericii',
        'La restaurant',
        '2 Iulie 2016',
        'Petrecerea va incepe la ora ',
        ' la',
        'Restaurantul  "Chez nous"',
        'Judeteana  D61  (01)  Ain, Sainte Croix, 01120',
        'Parcare gratuita : in fata restaurantului',
        '');

    self.mariage = ko.observable(roMariageData);

    self.switchLang = function (lang) {
        self.lang(lang);
        if (self.lang() == 'fr') {
            self.mariage(frMariageData);
        }

        if (self.lang() == 'ro') {
            self.mariage(roMariageData);
        }
    };

    new alindicu.GoogleMap('map-mairie', 45.766450, 4.879592);
    new alindicu.GoogleMap('map-eglise', 45.747963, 4.84598260000007);
};