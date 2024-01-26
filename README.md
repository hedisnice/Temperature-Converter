# Temperature-Converter

The provided JavaScript code facilitates the conversion of temperatures among Celsius, Fahrenheit, and Kelvin on an HTML website, utilizing input fields for users to enter temperature values in each unit.

The code operates as follows:

1. It captures the elements of the designated input fields (celcius, fahrenheit, kelvin) and assigns them to variables: celciusInput, fahrenheitInput, kelvinInput.

2. It assembles all input field elements into a NodeList called temperatureInputs using querySelectorAll.

3. By employing forEach, it iterates through each input field and adds an Event Listener for the "input" event.

4. In the function triggered upon any input in an input field, it retrieves the user-entered value and the specified unit.

5. If the entered value is empty, it clears all input fields and exits the function.

6. Subsequently, the code performs temperature conversion based on the entered units:

6.1 If the unit is Celsius (celcius), it converts to Fahrenheit and Kelvin.
6.2 If the unit is Fahrenheit, it converts to Celsius and Kelvin.
6.3 If the unit is Kelvin, it converts to Celsius and Fahrenheit.

The converted values are then displayed in the remaining input fields.

![Design preview](./design/desktop-preview.jpg)




Links Solution URL: [https://github.com/hedisnice/Temperature-Converter]

Live Site URL: [https://hedisnice.github.io/Temperature-Converter/]



