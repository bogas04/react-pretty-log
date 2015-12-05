# Pretty Log
A simple React Component to have pretty change log descriptor images.

# Usage 

```jsx
ReactDOM.render(<PrettyLog items = {[
    { title: "Cleaner UI", image: "1.png" },
    { title: "Charts for better data representation", image: "2.png" },
    { title: "Responsive UI, no more scrolling!", image: "3.png" }
]} size = '200px' />, document.getElementById('root'));
```

# Attributes

* _items_ List of items to form bubble from.
* _classes_ List of classes (space separated string) you want to add per bubble. For example `col-md-4` for 3 cards using bootstrap.
* _size_ Size of images. For example `200px`.
* _color_ Prominent color of the bubbles
* _font_ Font for the text

# Screenshot
![Screenshot](docs/image.png)

# Status

* [ ] Find a way to keep it as customizable as possible
* [x] Create a basic version with only one style
