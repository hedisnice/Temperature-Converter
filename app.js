const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const temperatureInputs = document.querySelectorAll("input");

temperatureInputs.forEach((input) => {
  input.addEventListener("input", (event) => {
    // Temperature value entered by the user
    let inputValue = parseInt(event.target.value);
    // Name of the temperature unit (celcius, fahrenheit, kelvin)
    let inputUnit = event.target.name;

    if (event.target.value === "") {
      celciusInput.value = null;
      fahrenheitInput.value = null;
      kelvinInput.value = null;
      return;
    }

    // Temperature conversion process
    if (inputUnit === "celcius") {
      // Celsius to Fahrenheit
      let fahrenheit = inputValue * 1.8 + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);

      // Celsius to Kelvin
      let kelvin = inputValue + 273;
      kelvinInput.value = kelvin.toFixed(2);
    } else if (inputUnit === "fahrenheit") {
      // Fahrenheit to Celsius
      let celcius = (inputValue - 32) / 1.8;
      celciusInput.value = celcius.toFixed(2);

      // Fahrenheit to Kelvin
      let kelvin = (inputValue - 32) / 1.8 + 273;
      kelvinInput.value = kelvin.toFixed(2);
    } else if (inputUnit === "kelvin") {
      // Kelvin to Celsius
      let celcius = inputValue - 273;
      celciusInput.value = celcius.toFixed(2);

      // Kelvin to Fahrenheit
      let fahrenheit = (inputValue - 273) * 1.8 + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
    }
  });
});
