
const contactButton = document.getElementById('contactButton');
const contactModal = document.getElementById('contactModal');
const closeButton = document.getElementsByClassName('close')[0];
const modalForm = document.querySelector('.modal-form');

function openModal() {
  contactModal.style.display = 'block';
}

function closeModal() {
  contactModal.style.display = 'none';
}

contactButton.addEventListener('click', openModal);

closeButton.addEventListener('click', closeModal);

// закрытие модального окна при клике вне его области
window.addEventListener('click', function (event) {
  if (event.target == contactModal) {
    closeModal();
  }
});

// проверка правильности электронной почты
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// проверка введенной даты и времени
function isValidDateTime(dateTime) {
  const currentDateTime = new Date();
  const selectedDateTime = new Date(dateTime);

  return selectedDateTime > currentDateTime;
}

// отправка формы
modalForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const contactDetails = document.getElementById('contactDetails').value;
  const city = document.getElementById('city').value;
  const insuranceType = document.getElementById('insuranceType').value;
  const dateTime = document.getElementById('dateTime').value;

// проверка на валидность данных
  let isValid = true;
  const contactDetailsError = document.getElementById('contactDetailsError');
  const dateTimeError = document.getElementById('dateTimeError');

  contactDetailsError.textContent = '';
  dateTimeError.textContent = '';

  if (!isValidEmail(contactDetails)) {
    contactDetailsError.textContent = 'Пожалуйста, введите корректный адрес электронной почты.';
    isValid = false;
  }

  if (!isValidDateTime(dateTime)) {
    dateTimeError.textContent = 'Пожалуйста, выберите дату и время, которые еще не прошли.';
    isValid = false;
  }

  if (isValid) {
// очистка полей 
    modalForm.reset();
    closeModal();
    alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
  }
});

// бургер меню
const contactButton1 = document.getElementById('contactButton1');
const contactModal1 = document.getElementById('contactModal1');
const closeModal1 = document.getElementsByClassName('close')[0];

contactButton1.addEventListener('click', () => {
  contactModal1.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  contactModal1.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === contactModal1) {
    contactModal1.style.display = 'none';
  }
});