function convert() {
	let temperature = document.getElementById("temperatureInput").value;
	let fromUnit = document.getElementById("fromUnit").value;
	let toUnit = document.getElementById("toUnit").value;
	let result = document.getElementById("result");

	if (fromUnit == "celsius" && toUnit == "fahrenheit") {
		result.innerHTML = ((temperature * 9/5) + 32).toFixed(2) + "°F";
	} else if (fromUnit == "celsius" && toUnit == "kelvin") {
		result.innerHTML = (parseFloat(temperature) + 273.15).toFixed(2) + "K";
	} else if (fromUnit == "fahrenheit" && toUnit == "celsius") {
		result.innerHTML = ((temperature - 32) * 5/9).toFixed(2) + "°C";
	} else if (fromUnit == "fahrenheit" && toUnit == "kelvin") {
		result.innerHTML = ((temperature - 32) * 5/9 + 273.15).toFixed(2) + "K";
	}else if (fromUnit == "kelvin" && toUnit == "celsius") {
		result.innerHTML = (parseFloat(temperature) - 273.15).toFixed(2) + "C";
	} else if (fromUnit == "kelvin" && toUnit == "fahrenheit") {
		result.innerHTML = ((temperature - 273.15) * 9/5 + 32).toFixed(2) + "°F";
	}
}