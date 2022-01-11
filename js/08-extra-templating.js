import vehicles from "./vehicles.js";

const carsList = document.querySelector(".js-cars-list");

const createCarCard = ({ make, model, type, price }) => {
  const carCardRef = document.createElement("li");
  carCardRef.classList.add("cars-list__item");

  const carMakeRef = document.createElement("p");
  carMakeRef.classList.add("car-make");
  carMakeRef.textContent = `Make: ${make}`;

  const carModelRef = document.createElement("p");
  carModelRef.classList.add("car-model");
  carModelRef.textContent = `Model: ${model}`;

  const carTypeRef = document.createElement("p");
  carTypeRef.classList.add("car-type");
  carTypeRef.textContent = `Type: ${type}`;

  const carPriceRef = document.createElement("p");
  carPriceRef.classList.add("car-price");
  carPriceRef.textContent = `Price: ${price}`;

  carCardRef.append(carMakeRef, carModelRef, carTypeRef, carPriceRef);

  return carCardRef;
};

const carsCards = vehicles.map(createCarCard);

carsList.append(...carsCards);

{
  /* 
<li class="cars-list__item">
    <p>Производитель: ${make}</p>
    <p>Модель: ${model}</p>
    <p>Тип: ${type}</p>
    <p>Цена: ${price}</p>
</li> 
*/
}
