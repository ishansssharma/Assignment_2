// SELECTING ALL THE CLASSES 
const medicineForm = document.querySelector(".medicine-form");
const productNameInput = document.querySelector(".product-name");
const productIDInput = document.querySelector(".product-ID");
const manufacturerInput = document.querySelector(".manufacturer");
const expirationDateInput = document.querySelector(".expiration-date");
const quantityInput = document.querySelector(".quantity");
const tabletInput = document.querySelector(".tablet");
const syrupInput = document.querySelector(".syrup");
const renderList = document.querySelector(".medicinelist");
const addMedButton = document.querySelector(".addmed-button");
const deleteAllMedButton = document.querySelector(".deleteallmed-button");

const allMedicineArray = [];


// CLASS WITH MEDICINE
class Medicine {
	constructor(productname, productID, manufacturer, expirationdate, quantity) {
		this.productname = productname
		this.manufacturer = manufacturer
		this.expirationdate = expirationdate
		this.quantity = quantity
		this.productID = productID
	}
	// METHOD FOR CREATING DIFFERENT MEDICINES

	static createMedicine() {

		addMedButton.addEventListener('click', (event) => {
			event.preventDefault();
			const newMedicine = {
				productname: productNameInput.value,
				manufacturer: manufacturerInput.value,
				expirationdate: expirationDateInput.value,
				quantity: quantityInput.value,
				productID: Date.now()
			}

			allMedicineArray.push(newMedicine);

			localStorage.setItem('medicine', JSON.stringify(allMedicineArray));


			const addedInfo = JSON.parse(localStorage.getItem('medicine'));
			console.log(addedInfo);

			UI.createList();
		})

	}

	static deleteAllMed() {
		deleteAllMedButton.addEventListener('click', () => {
			localStorage.removeItem('medicine', allMedicineArray);
		})
	}

	static deleteSingleMed() {
		singleMedicineDeleteButton.addEventListener('click', () => {
			const MedArray = JSON.parse(localStorage.getItem('medicine')) || []

			const updatedMedArray = MedArray.filter(med => med.id !== medID);

			localStorage.setItem('medicine', JSON.stringify(updatedMedArray));
		})
	}

}


Medicine.createMedicine();
Medicine.deleteAllMed();
Medicine.deleteSingleMed();

class UI {
	static createList() {

		renderList.textContent = '';
		allMedicineArray.forEach((medicine) => {

			//CREATING ELEMENTS
			const medicineLi = document.createElement('li');
			const productnamespan = document.createElement('span');
			const productIDspan = document.createElement("span");
			const manufacturerspan = document.createElement("span");
			const expirationdatespan = document.createElement("span");
			const quantityspan = document.createElement("span");
			const singleMedicineDeleteButton = document.createElement("button");

			// ASSIGNING THE VALUES

			renderList.append(medicineLi);
			medicineLi.append(productnamespan, productIDspan, manufacturerspan, expirationdatespan, quantityspan, singleMedicineDeleteButton);



			// GIVING VALUES TO THE ELEMENTS

			productnamespan.textContent = medicine.productname;
			productIDspan.textContent = medicine.productID;
			manufacturerspan.textContent = medicine.manufacturer;
			expirationdatespan.textContent = medicine.expirationdate;
			quantityspan.textContent = medicine.quantity;
			singleMedicineDeleteButton.textContent = "Delete";

			//GIVING CLASSES TO THE ELEMENTS
			medicineLi.classList.add("medicineline");
			productnamespan.classList.add("productspan");
			productIDspan.classList.add("productIDspan");
			manufacturerspan.classList.add("manufacturerspan");
			expirationdatespan.classList.add("expirationdatespan");
			quantityspan.classList.add("quantityspan");

		})
	}

}