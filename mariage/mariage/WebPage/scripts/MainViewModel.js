var alindicu = window.alindicu = window.alindicu || {};

alindicu.MainViewModel = function () {
    var self = this;

    self.heureMairie = '10h (*)';
    self.heureEglise = '13 (*)';
    self.heureRestaurant = '18 (*)';
    
    var frMariageData =  new alindicu.MariageViewModel(
        '2 Juillet 2016',
        'à Lyon',
        'A la mairie',
        'La cérémonie se tiendra ',
        ' à la',
        'Mairie de Villeurbanne',
        '3, Place du Dr Lazare Goujon, 69100 Villeurbanne',
        'Parkings payants',
        '17 rue Michel Servet (air libre)',
        '38 bis rue Michel Servet (couvert)',
        'A l\'église',
        'La cérémonie se tiendra ',
        ' à',
        'l\'Eglise Saint Côme Saint Damien',
        '53, chemin de Fond Rose, Caluire et Cuire, 69300',
        'Parking gratuit : dans la cour de l\'église',
        'Au restaurant',
        'Nous allons faire la fête ',
        ' au',
        'Restaurant  "Chez nous"',
        'Route  Départementale  D61  (01)  Ain, Sainte Croix, 01120',
        'Parking gratuit : devant le restaurant',
        '(*)Les heures sont approximatives et seront mises à jour prochainement');

    var roMariageData = new alindicu.MariageViewModel(
        '2 Iulie 2016',
        'la Lyon',
        'La primarie',
        'Ceremonia se va tine la ora ',
        ' la',
        'Primaria Villeurbanne',
        '3, Place du Dr Lazare Goujon, 69100 Villeurbanne',
        'Parcare cu plata',
        '17 rue Michel Servet (aer liber)',
        '38 bis rue Michel Servet (acoperit)',
        'La biserica',
        'Ceremonia se va tine la ora ',
        ' la',
        'Biserica Saint Côme Saint Damien',
        '53, chemin de Fond Rose, Caluire et Cuire, 69300',
        'Parcare gratuita : in curtea bisericii',
        'La restaurant',
        'Petrecerea va fi ',
        ' la',
        'Restaurantul  "Chez nous"',
        'Judeteana  D61  (01)  Ain, Sainte Croix, 01120',
        'Parcare gratuita : in fata restaurantului',
        '(*) Orele sunt aproximative si vor fi fixate in curand');

    self.mariage = ko.observable(roMariageData);

    self.switchLang = function(lang) {
        if (lang == 'fr') {
            self.mariage(frMariageData);
        }

        if (lang == 'ro') {
            self.mariage(roMariageData);
        }
    }

    new alindicu.GoogleMap('map-mairie', 45.766450, 4.879592);
    new alindicu.GoogleMap('map-eglise', 45.791826, 4.824995);
};