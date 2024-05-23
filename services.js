var xhr = new XMLHttpRequest();
xhr.open('GET', 'services.xml', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var xmlDoc = xhr.responseXML;

    var insuranceContainer = document.getElementById('insuranceContainer');
    var insurances = xmlDoc.getElementsByTagName('insurance');

    for (var i = 0; i < insurances.length; i++) {
      var insurance = insurances[i];

      var name = insurance.getAttribute('name');
      var description = insurance.getElementsByTagName('description')[0].textContent;

      var insuranceElement = document.createElement('div');
      insuranceElement.classList.add('insurance');

      var nameElement = document.createElement('h2');
      nameElement.textContent = name;

      var descriptionElement = document.createElement('p');
      descriptionElement.textContent = description;

      insuranceElement.appendChild(nameElement);
      insuranceElement.appendChild(descriptionElement);

      insuranceContainer.appendChild(insuranceElement);
    }
  }
};
xhr.send();