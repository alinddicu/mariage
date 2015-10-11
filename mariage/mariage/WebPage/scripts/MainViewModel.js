var alindicu = window.alindicu = window.alindicu || {};

alindicu.MainViewModel = function () {
    var self = this;

    self.heureMairie = 'dans la matin�e (*)';
    self.heureEglise = 'dans l\'apr�s-midi (*)';
    self.heureRestaurant = 'le soir (*)';

    self.mariage = ko.observable(new alindicu.MariageViewModel(
        'le 2 Juillet 2016',
        '� Lyon',
        'A la mairie',
        'La c�r�monie se tiendra ',
        ' � la',
        'Mairie de Villeurbanne',
        '3, Place du Dr Lazare Goujon, 69100 Villeurbanne',
        'Parkings payants',
        '17 rue Michel Servet (air libre)',
        '38 bis rue Michel Servet (couvert)',
        'A l\'�glise',
        'La c�r�monie se tiendra ',
        ' �',
        'l\'Eglise Saint C�me Saint Damien',
        '53, chemin de Fond Rose, Caluire et Cuire, 69300',
        'Parking gratuit : dans la cour de l\'�glise',
        'Au restaurant',
        'Nous allons faire la f�te ',
        ' au',
        'Restaurant  "Chez nous"',
        'Route  D�partementale  D61  (01)  Ain, Sainte Croix, 01120',
        'Parking gratuit : devant le restaurant',
        '(*)Les heures exactes seront mises � jour prochainement'));

    new alindicu.GoogleMap('map-mairie', 45.766450, 4.879592);
    new alindicu.GoogleMap('map-eglise', 45.791826, 4.824995);
};