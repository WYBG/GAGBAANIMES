console.log('coucou');

var rayon = 25;
var surface = Math.PI*Math.pow(rayon,2);
var reponse ="'La surface d'un cercle de rayon "+rayon+" est de suface "+ surface;
alert(reponse);
console.log(reponse)
var tableau=[]
tableau[0]="Nom"
tableau[1]="Prénom"
tableau[2]="Date de naissance"
tableau[3]="Lieu de naissance"

var map= L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoid3liZyIsImEiOiJja3pwY3NkczEzZzgzMnBvMGRuMThyMmF2In0.4EWg3b0kAlgiARXr_S3qaQ'
}).addTo(map);