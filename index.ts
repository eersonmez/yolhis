/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

let map: google.maps.Map;
let heatmap: google.maps.visualization.HeatmapLayer;
let heatmap2: google.maps.visualization.HeatmapLayer;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 13,
    center: { lat: 37.775, lng: -122.434 },
    mapTypeId: "satellite",
    mapTypeControl: false,
    streetViewControl: false,
    zoomControl: false,
    fullscreenControl: false,
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPointsCukur(),
    map: map,
  });

  heatmap2 = new google.maps.visualization.HeatmapLayer({
    data: getPointsKasis(),
    map: map,
  });

  changeGradient();

  document
    .getElementById("toggle-heatmap")!
    .addEventListener("click", toggleHeatmap);
  document
    .getElementById("change-gradient")!
    .addEventListener("click", toggleHeatmap2);
  // document
  //   .getElementById("change-opacity")!
  //   .addEventListener("click", changeOpacity);
  // document
  //   .getElementById("change-radius")!
  //   .addEventListener("click", changeRadius);
}

function toggleHeatmap(): void {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function toggleHeatmap2(): void {
  heatmap2.setMap(heatmap2.getMap() ? null : map);
}

function changeGradient(): void {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];

  heatmap2.set("gradient", gradient);
}

function changeRadius(): void {
  heatmap.set("radius", heatmap.get("radius") ? null : 20);
}

function changeOpacity(): void {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}

function getPointsKasis() {
  return [
    new google.maps.LatLng(37.071102	,	37.3271515          ),
    new google.maps.LatLng(37.07110283	,	37.32714983         ),
    new google.maps.LatLng(37.07110417	,	37.32715667         ),
    new google.maps.LatLng(37.0711075	,	37.32719483         ),
    new google.maps.LatLng(37.071113	,	37.32721283         ),
    new google.maps.LatLng(37.07111583	,	37.32721967         ),
    new google.maps.LatLng(37.07111767	,	37.3272285          ),
    new google.maps.LatLng(37.07112283	,	37.32723467         ),
    new google.maps.LatLng(37.07112683	,	37.327242           ),
    new google.maps.LatLng(37.07116117	,	37.32736            ),
    new google.maps.LatLng(37.07117083	,	37.32738067         ),
    new google.maps.LatLng(37.07117033	,	37.32748767         ),
    new google.maps.LatLng(37.07117083	,	37.327481           ),
    new google.maps.LatLng(37.0711885	,	37.32747            ),
    new google.maps.LatLng(37.07118883	,	37.32746633         ),
    new google.maps.LatLng(37.07119	,	37.32746767         ),
    new google.maps.LatLng(37.07119	,	37.32746233         ),
    new google.maps.LatLng(37.0711895	,	37.32746783         ),
    new google.maps.LatLng(37.07118867	,	37.32747633         ),
    new google.maps.LatLng(37.071189	,	37.32748067         ),
    new google.maps.LatLng(37.071189	,	37.32748417         ),
    new google.maps.LatLng(37.07118317	,	37.32751267         ),
    new google.maps.LatLng(37.07111233	,	37.327622           ),
    new google.maps.LatLng(37.071112	,	37.3276165          ),
    new google.maps.LatLng(37.07111117	,	37.32760233         ),
    new google.maps.LatLng(37.07111867	,	37.327533           ),
    new google.maps.LatLng(37.07112033	,	37.32752983         ),
    new google.maps.LatLng(37.07112017	,	37.32752933         ),
    new google.maps.LatLng(37.071111	,	37.32755617         ),
    new google.maps.LatLng(37.0711085	,	37.32756017         ),
    new google.maps.LatLng(37.07110817	,	37.32756383         ),
    new google.maps.LatLng(37.07119867	,	37.327363           ),
    new google.maps.LatLng(37.07120033	,	37.32735967         ),
    new google.maps.LatLng(37.07120167	,	37.32735433         ),
    new google.maps.LatLng(37.071204	,	37.327363           ),
    new google.maps.LatLng(37.071211	,	37.32737317         ),
    new google.maps.LatLng(37.07121633	,	37.32738567         ),
    new google.maps.LatLng(37.07121983	,	37.32742267         ),
    new google.maps.LatLng(37.07121617	,	37.32742283         ),
    new google.maps.LatLng(37.07121267	,	37.32742933         ),
    new google.maps.LatLng(37.07121083	,	37.32743183         ),
    new google.maps.LatLng(37.0712305	,	37.32744867         ),
    new google.maps.LatLng(37.07123133	,	37.3274515          ),
    new google.maps.LatLng(37.07122683	,	37.32745517         ),
    new google.maps.LatLng(37.07113333	,	37.32772583         ),
    new google.maps.LatLng(37.07113117	,	37.32770433         ),
    new google.maps.LatLng(37.0709505	,	37.32732733         ),
    new google.maps.LatLng(37.0710465	,	37.32725867         ),
    new google.maps.LatLng(37.07109667	,	37.328215           ),
    new google.maps.LatLng(37.0714385	,	37.32834217         ),
    new google.maps.LatLng(37.071478	,	37.3283235          ),
    new google.maps.LatLng(37.07148333	,	37.32832433         ),
    new google.maps.LatLng(37.07112983	,	37.3285015          ),
    new google.maps.LatLng(37.07221767	,	37.3304185          ),
    new google.maps.LatLng(37.072218	,	37.33043383         ),
    new google.maps.LatLng(37.07215067	,	37.33034183         ),
    new google.maps.LatLng(37.07215067	,	37.33033933         ),
    new google.maps.LatLng(37.07214767	,	37.33034217         ),
    new google.maps.LatLng(37.07214733	,	37.33034217         ),
    new google.maps.LatLng(37.072149	,	37.33034867         ),
    new google.maps.LatLng(37.070443	,	37.33607533         ),
    new google.maps.LatLng(37.07047167	,	37.3361725          ),
    new google.maps.LatLng(37.07050733	,	37.33627217         ),
    new google.maps.LatLng(37.07054383	,	37.3363765          ),
    new google.maps.LatLng(37.07057367	,	37.3364825          ),
    new google.maps.LatLng(37.070615	,	37.33658667         ),
    new google.maps.LatLng(37.07066	,	37.33679867         ),
    new google.maps.LatLng(37.07068333	,	37.3369055          ),
    new google.maps.LatLng(37.07071567	,	37.33701017         ),
    new google.maps.LatLng(37.07277383	,	37.3452315          ),
    new google.maps.LatLng(37.07283217	,	37.345239           ),
    new google.maps.LatLng(37.072988	,	37.345259           ),
    new google.maps.LatLng(37.073077	,	37.3452675          ),
    new google.maps.LatLng(37.07317267	,	37.345278           ),
    new google.maps.LatLng(37.07404817	,	37.35080067         ),
    new google.maps.LatLng(37.07405683	,	37.350791           ),
    new google.maps.LatLng(37.07405667	,	37.35079467         ),
    new google.maps.LatLng(37.07405683	,	37.35079617         ),
    new google.maps.LatLng(37.074057	,	37.35079767         ),
    new google.maps.LatLng(37.074057	,	37.3508005          ),
    new google.maps.LatLng(37.07405767	,	37.35080133         ),
    new google.maps.LatLng(37.074058	,	37.35080183         ),
    new google.maps.LatLng(37.07358817	,	37.347198           ),
    new google.maps.LatLng(37.07359333	,	37.3471325          ),
    new google.maps.LatLng(37.07359733	,	37.3470665          ),
    new google.maps.LatLng(37.073603	,	37.34700133         ),
    new google.maps.LatLng(37.07361083	,	37.34694017         ),
    new google.maps.LatLng(37.07362283	,	37.3468915          ),
    new google.maps.LatLng(37.07363317	,	37.34684733         ),
    new google.maps.LatLng(37.07363683	,	37.3468045          ),
    new google.maps.LatLng(37.07363717	,	37.34676767         ),
    new google.maps.LatLng(37.07363783	,	37.34673733         ),
    new google.maps.LatLng(37.07563933	,	37.34438933         ),
    new google.maps.LatLng(37.0756725	,	37.34435467         ),
    new google.maps.LatLng(37.07585667	,	37.34391467         ),
    new google.maps.LatLng(37.0758745	,	37.3438775          ),
    new google.maps.LatLng(37.07588933	,	37.343836           ),
    new google.maps.LatLng(37.07590333	,	37.3438225          ),
    new google.maps.LatLng(37.07599783	,	37.343673           ),
    new google.maps.LatLng(37.07769433	,	37.34856767         ),
    new google.maps.LatLng(37.07773917	,	37.34858233         ),
    new google.maps.LatLng(37.077782	,	37.34859583         ),
    new google.maps.LatLng(37.07787083	,	37.34861783         ),
    new google.maps.LatLng(37.07790933	,	37.34863            ),
    new google.maps.LatLng(37.07795017	,	37.34864217         ),
    new google.maps.LatLng(37.077995	,	37.34865617         ),
    new google.maps.LatLng(37.07803733	,	37.34866733         ),
    new google.maps.LatLng(37.0794295	,	37.34543883         ),
    new google.maps.LatLng(37.07937317	,	37.34540967         ),
    new google.maps.LatLng(37.07931217	,	37.3453735          ),
    new google.maps.LatLng(37.079254	,	37.345343           ),
    new google.maps.LatLng(37.07919533	,	37.345312           ),
    new google.maps.LatLng(37.07913217	,	37.3452855          ),
    new google.maps.LatLng(37.079074	,	37.34525433         ),
    new google.maps.LatLng(37.0789695	,	37.34518817         ),
    new google.maps.LatLng(37.0774715	,	37.3361345          ),
    new google.maps.LatLng(37.07748533	,	37.33604367         ),
    new google.maps.LatLng(37.07750683	,	37.3359505          ),
    new google.maps.LatLng(37.07753533	,	37.33585983         ),
    new google.maps.LatLng(37.07756883	,	37.33576767         ),
    new google.maps.LatLng(37.077605	,	37.33567367         ),
    new google.maps.LatLng(37.077647	,	37.33556633         ),
    new google.maps.LatLng(37.0776925	,	37.33544867         ),
    new google.maps.LatLng(37.07773983	,	37.33531933         ),
    new google.maps.LatLng(37.07764667	,	37.33126033         ),
    new google.maps.LatLng(37.07756117	,	37.33121367         ),
    new google.maps.LatLng(37.07747983	,	37.33116433         ),
    new google.maps.LatLng(37.0774055	,	37.3311155          ),
    new google.maps.LatLng(37.07727817	,	37.3310155          ),
    new google.maps.LatLng(37.07722883	,	37.33095567         ),
    new google.maps.LatLng(37.0734135	,	37.32902            ),
    new google.maps.LatLng(37.073324	,	37.32898083         ),
    new google.maps.LatLng(37.07325417	,	37.3289405          ),
    new google.maps.LatLng(37.07319967	,	37.32890717         ),
    new google.maps.LatLng(37.07315767	,	37.32888133         ),
    new google.maps.LatLng(37.07313283	,	37.32885683         ),
    new google.maps.LatLng(37.07311383	,	37.328845           ),    
  ];
}

// Heatmap data: 500 Points
function getPointsCukur() {
  return [
new google.maps.LatLng(37.07110483	,	37.327172         ),
new google.maps.LatLng(37.07110617	,	37.3271825        ),
new google.maps.LatLng(37.07111017	,	37.32720517       ),
new google.maps.LatLng(37.07112083	,	37.327231         ),
new google.maps.LatLng(37.071125	,	37.327238         ),
new google.maps.LatLng(37.07112867	,	37.32724617       ),
new google.maps.LatLng(37.07113	,	37.3272505        ),
new google.maps.LatLng(37.071131	,	37.32725533       ),
new google.maps.LatLng(37.071132	,	37.327259         ),
new google.maps.LatLng(37.07113267	,	37.32726283       ),
new google.maps.LatLng(37.0711335	,	37.32726567       ),
new google.maps.LatLng(37.07113483	,	37.32726833       ),
new google.maps.LatLng(37.07116	,	37.32735833       ),
new google.maps.LatLng(37.07116333	,	37.3273605        ),
new google.maps.LatLng(37.071166	,	37.32736733       ),
new google.maps.LatLng(37.071169	,	37.32737417       ),
new google.maps.LatLng(37.07117233	,	37.32738717       ),
new google.maps.LatLng(37.07117283	,	37.32739117       ),
new google.maps.LatLng(37.071173	,	37.32739667       ),
new google.maps.LatLng(37.07117433	,	37.327398         ),
new google.maps.LatLng(37.07117467	,	37.32740733       ),
new google.maps.LatLng(37.07117517	,	37.3274105        ),
new google.maps.LatLng(37.07117617	,	37.32740667       ),
new google.maps.LatLng(37.0711765	,	37.32740733       ),
new google.maps.LatLng(37.071177	,	37.327405         ),
new google.maps.LatLng(37.07116667	,	37.32750083       ),
new google.maps.LatLng(37.07116817	,	37.32749533       ),
new google.maps.LatLng(37.07117	,	37.327491         ),
new google.maps.LatLng(37.07117067	,	37.32748033       ),
new google.maps.LatLng(37.07117233	,	37.32747333       ),
new google.maps.LatLng(37.07117333	,	37.327468         ),
new google.maps.LatLng(37.07117267	,	37.32746583       ),
new google.maps.LatLng(37.07118833	,	37.32746967       ),
new google.maps.LatLng(37.07118867	,	37.32746817       ),
new google.maps.LatLng(37.0711885	,	37.32749233       ),
new google.maps.LatLng(37.0711885	,	37.32750067       ),
new google.maps.LatLng(37.07118167	,	37.32752083       ),
new google.maps.LatLng(37.0711125	,	37.327627         ),
new google.maps.LatLng(37.07111133	,	37.32760983       ),
new google.maps.LatLng(37.07111967	,	37.32753167       ),
new google.maps.LatLng(37.07112033	,	37.32753017       ),
new google.maps.LatLng(37.07111983	,	37.327529         ),
new google.maps.LatLng(37.07111917	,	37.3275285        ),
new google.maps.LatLng(37.07111917	,	37.327532         ),
new google.maps.LatLng(37.07111333	,	37.32755433       ),
new google.maps.LatLng(37.07111267	,	37.32755433       ),
new google.maps.LatLng(37.07111	,	37.32755717       ),
new google.maps.LatLng(37.07110883	,	37.32756667       ),
new google.maps.LatLng(37.07110983	,	37.32756667       ),
new google.maps.LatLng(37.07121883	,	37.327395         ),
new google.maps.LatLng(37.07122267	,	37.32740517       ),
new google.maps.LatLng(37.07122367	,	37.32741267       ),
new google.maps.LatLng(37.071221	,	37.32741883       ),
new google.maps.LatLng(37.07122083	,	37.32741967       ),
new google.maps.LatLng(37.07122067	,	37.3274205        ),
new google.maps.LatLng(37.07121933	,	37.32742517       ),
new google.maps.LatLng(37.07121883	,	37.32742617       ),
new google.maps.LatLng(37.071218	,	37.32742517       ),
new google.maps.LatLng(37.07121683	,	37.32742783       ),
new google.maps.LatLng(37.0712165	,	37.3274245        ),
new google.maps.LatLng(37.07121183	,	37.32743033       ),
new google.maps.LatLng(37.07123183	,	37.32744983       ),
new google.maps.LatLng(37.07123033	,	37.32745383       ),
new google.maps.LatLng(37.07122867	,	37.32745467       ),
new google.maps.LatLng(37.07122567	,	37.3274565        ),
new google.maps.LatLng(37.07122483	,	37.32745817       ),
new google.maps.LatLng(37.07114617	,	37.3277815        ),
new google.maps.LatLng(37.07114483	,	37.32777633       ),
new google.maps.LatLng(37.0711385	,	37.3277505        ),
new google.maps.LatLng(37.07113433	,	37.32773417       ),
new google.maps.LatLng(37.0711325	,	37.32771617       ),
new google.maps.LatLng(37.0709605	,	37.32740367       ),
new google.maps.LatLng(37.07096	,	37.32739267       ),
new google.maps.LatLng(37.0709585	,	37.327378         ),
new google.maps.LatLng(37.07095717	,	37.3273675        ),
new google.maps.LatLng(37.07095517	,	37.32735567       ),
new google.maps.LatLng(37.0709535	,	37.32734417       ),
new google.maps.LatLng(37.070952	,	37.32733533       ),
new google.maps.LatLng(37.07094967	,	37.327322         ),
new google.maps.LatLng(37.07104683	,	37.32726217       ),
new google.maps.LatLng(37.07148133	,	37.328324         ),
new google.maps.LatLng(37.07221683	,	37.33043083       ),
new google.maps.LatLng(37.072219	,	37.33043383       ),
new google.maps.LatLng(37.07221967	,	37.33043383       ),
new google.maps.LatLng(37.07032417	,	37.3324115        ),
new google.maps.LatLng(37.07032233	,	37.33241          ),
new google.maps.LatLng(37.0721515	,	37.33033883       ),
new google.maps.LatLng(37.07214917	,	37.330341         ),
new google.maps.LatLng(37.07215517	,	37.33036967       ),
new google.maps.LatLng(37.07064067	,	37.33669133       ),
new google.maps.LatLng(37.072726	,	37.34521583       ),
new google.maps.LatLng(37.0729045	,	37.345248         ),
new google.maps.LatLng(37.07405683	,	37.350793         ),
new google.maps.LatLng(37.074057	,	37.35079967       ),
new google.maps.LatLng(37.0758915	,	37.343847         ),
new google.maps.LatLng(37.07590567	,	37.34378983       ),
new google.maps.LatLng(37.07593383	,	37.34374467       ),
new google.maps.LatLng(37.0759615	,	37.34370667       ),
new google.maps.LatLng(37.07782633	,	37.34860717       ),
new google.maps.LatLng(37.07954433	,	37.34549883       ),
new google.maps.LatLng(37.07948717	,	37.3454685        ),
new google.maps.LatLng(37.07902033	,	37.3452205        ),
new google.maps.LatLng(37.07772583	,	37.33131417       ),
new google.maps.LatLng(37.07733717	,	37.33106967       ),
new google.maps.LatLng(37.077179	,	37.33090433       ),
new google.maps.LatLng(37.0735075	,	37.3290675        ),
  ];
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
