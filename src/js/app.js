// SELECTING ALL THE CLASSES 
const medicineForm = document.querySelector(".medicine-form");
const productNameInput = document.querySelector(".product-name");
const productIDInput = document.querySelector(".product-ID");
const manufacturerInput = document.querySelector(".manufacturer");
const expirationDateInput = document.querySelector(".expiration-date");
const quantityInput = document.querySelector(".quantity-input");
const tabletInput = document.querySelector(".tablet");
const syrupInput = document.querySelector(".syrup");


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
		const newMedicine = new Medicine(productNameInput.value, productIDInput.value, manufacturerInput.value, expirationDateInput.value, quantityInput.value)
		return newMedicine;
	}

}

class UI {
	static createList() {

	}
}