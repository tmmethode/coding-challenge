# COA TASKFORCE TAKE HOME CHALLENGE

# Interactive Image Gallery

This project is an interactive image gallery showcasing various animals. It uses HTML, CSS, and JavaScript to create a responsive and engaging user experience. When users hover over an image, additional information appears, and they can click a "Know More" link for further details.

## Features

- **Responsive Design**: The gallery adjusts to different screen sizes, providing a smooth experience on both desktop and mobile devices.
- **Hover Effects**: Images become blurred and grayscale on hover, while additional information slides up.
- **Interactive Links**: "Know More" links become visible on hover, providing more details about each animal.

## Technologies Used

- **HTML**: Markup language used for structuring the content.
- **CSS**: Stylesheet language used for describing the presentation of the document.
- **JavaScript**: Programming language used to add interactivity to the web page.

## File Structure

gallery/
│
├── assets/
│ ├── css/
│ │ └── style.css
│ ├── images/
│ │ ├── image1.png
│ │ ├── image2.png
│ │ ├── image3.png
│ │ └── image4.png
│ ├── js/
│ │ └── script.js
│ └── font/
│ ├── DINCondensed-Bold.ttf
│ └── Poppins-Regular.ttf
│
└── README.md

## How It Works

### HTML (`index.html`)

The HTML file contains the structure of the gallery. It includes a `div` with the class `image` which houses multiple `div` elements with the class `overlay`. Each `overlay` contains an image, a description (headtext), a location (`location`), and a hidden "Know More" link.

### CSS (`assets/css/style.css`)

The CSS file defines the styles for the gallery. It includes:

- **Font Definitions**: Custom fonts used for the text.
- **Image Styles**: Background images for each animal.
- **Responsive Design**: Media queries for different screen sizes.
- **Hover Effects**: Transitions and effects for the images and info boxes.

### JavaScript (`assets/js/script.js`)

The JavaScript file adds interactivity to the gallery. It includes:

- **Event Listeners**: `mouseenter` and `mouseleave` events for showing/hiding the "Know More" link and moving the info box.
- **Click Event**: An optional click event for the "Know More" link that displays an alert with more information.

### Step-by-Step Guide

1. **Clone the Repository**:

   https://github.com/tmmethode/coding-challenge.git
2. **Navigate to the Project Directory**:

   `cd coding-challenge/gallery` Or use file manager to navigate in that directory
3. **Open `index.html` in a Browser**:
   You can simply open the `index.html` file in your web browser to view the gallery.

### Example

When you hover over an image, it will blur and turn grayscale. The info box will slide up, revealing the name and location of the animal. The "Know More" link will appear, which you can click for more information.

# Coding challenges

challenge folder contains two programs implemented in JavaScript. Each program solves a specific problem and is explained below.

## File Structure

project-root/
│
├── challenge/
│ ├── `arrayMap.js`
│ ├── stringTransform.js
└── README.md

## Coding Challenge 1: Array Manipulation

### Problem Statement:

Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

#### Example:

```javascript
// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target));  // Output: true
```

## Coding Challenge 2: String Transformation

### Problem Statement:

Given a string, transform it based on the following rules:

* If the length of the string is divisible by 3, reverse the entire string.
* If the length of the string is divisible by 5, replace each character with its ASCII code.
* If the length of the string is divisible by both 3 and 5, perform both operations in the order specified above.

### Example:

```javascript
// Example usage:
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"

```

### Explanation:

* This program transforms a string based on specific rules depending on the string's length.
* It checks if the length is divisible by 3, 5, or both, and performs the corresponding transformations.
* The program efficiently handles all possible cases and returns the transformed string accordingly.

## How to Run:

### Method 1: Online Compiler

1. Visit an online JavaScript compiler, such as [Programiz Compiler](https://www.programiz.com/javascript/online-compiler/) or [onecompiler](https://onecompiler.com/javascript).
2. Copy the code from `arrayMap.js` or stringTransform.js
3. Paste the code into the online compiler's editor.
4. Run the code in the online compiler.

### Method 2: Local Environment

1. Make sure you have Node.js installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the directory containing the JavaScript files.
4. Open a terminal or command prompt in that directory.
5. Run the following command:

   ```
   node arrayMap.js
   ```

   or

   ```
   node stringTransform.js
   ```

### Credits

This project was created by Methode TWIZEYIMANA.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
