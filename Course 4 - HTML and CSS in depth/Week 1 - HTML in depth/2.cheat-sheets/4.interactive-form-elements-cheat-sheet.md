# Interactive form elements cheat sheet

## Required

Denotes a mandatory input that the user can’t leave empty. It can be used with any input type, like password, radio, text and so on. 

```html
<input type="text" id="firstName" name="firstName" required>
```

## Maxlength

Specifies the maximum length of a text input, in other words, the maximum number of characters that can be entered for a specific field. If provided, it will prevent the user from entering more characters than the limit. 

```html
<input type="text" id="description" name="description" maxlength="50">
```

## Minlength

Specifies the minimum length of a text input. If set, the input will not accept fewer characters than those specified. 

```html
<input type="password" id="password" name="password" minlength="8">
```

## Min and max attributes

Determine the minimum and maximum values allowed for an input field. They are usually applied to numerical text inputs, range inputs or dates. 

```html
<input type="number" id="quantity" name="quantity" min="1" max="10"> 
```

```html
<input type="range" id="volume" name="volume" min="1" max="100">
```

## Multiple

Indicates that the user can enter more than one value in a single input field. This attribute can only be used for email and file input types. 

```html
<input type="file" id="gallery" name="gallery" multiple>
```

## Pattern

Defines a particular pattern that an input field value has to fulfill to be considered valid. This attribute expects a regular expression to specify the pattern. It works with text, date, search, URL, tel, email and password input types. For example, you can restrict phone numbers to be only from the UK.

```html
<input type="tel" id="phone" name="phone" pattern=”^(?:0|\+?44)(?:\d\s?){9,10}$” >
```