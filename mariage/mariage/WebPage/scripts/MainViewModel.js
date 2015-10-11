var alindicu = window.alindicu = window.alindicu || {};

alindicu.MainViewModel = function () {
    var self = this;

    self.heureMairie = 'dans la matinée (*)';
    self.heureEglise = 'dans l\'après-midi (*)';
    self.heureRestaurant = 'le soir (*)';

    self.mariage = ko.observable(new alindicu.MariageViewModel(
        'le 2 Juillet 2016',
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
        '(*)Les heures exactes seront mises à jour prochainement'));

    new alindicu.GoogleMap('map-mairie', 45.766450, 4.879592);
    new alindicu.GoogleMap('map-eglise', 45.791826, 4.824995);
};