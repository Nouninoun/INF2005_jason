//On charge les éléments du html
var header = document.querySelector('header');
var section = document.querySelector('section');

//on charge l'URL du fichier .json
var requestURL = 'struct.json';

//On instancie l'objet XMLHttpRequest afin de pouvoir faire une requête
var request = new XMLHttpRequest();

//On ouvre une nouvelle requête
request.open("GET", requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  var contacts = request.response;
  populateHeader(contacts);
  showContacts(contacts);
}

function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['datas'];
  header.appendChild(myH1);
}

function showContacts(jsonObj){
  var contacts = jsonObj['contacts'];

  for (var i = 0; i < contacts.length; i++)
  {
    var div = document.createElement('div');
    var name = document.createElement('h2');
    var list = document.createElement('ul');
    var name1 = contacts[i].firstname;
    var name2 = contacts[i].lastname;
    name.textContent = name1 + " " + name2;

    var phonenumbers = contacts[i].phonenumbers;
    for (var y = 0; y<phonenumbers.length; y++)
    {
      var shownumber = document.createElement('li');
      var type = phonenumbers[y].type;
      var number = phonenumbers[y].number;
      shownumber.textContent = type + " : " + number;
      list.appendChild(shownumber);
    }
  }
  div.appendChild(name);
  div.appendChild(list);
  section.appendChild(div);
}
