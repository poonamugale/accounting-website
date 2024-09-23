// import React from "react";
// import ReactDOM from "react-dom/client";
// import { useState ,useEffect} from "react";

// const Body = () => {
//   return (
//     <div className="body-container">
//       <div className="sliding-image">
//         <ImageSlider />
//       </div>
//     </div>
//   );
// };

// const ImageSlider = () => {
//   const images = [
//     "https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?cs=srgb&dl=pexels-pixabay-462331.jpg&fm=jpg",
//     "https://www.burohappold.com/wp-content/uploads/2020/02/experts-in-tall-buildings-burohappold_getty.jpg",
//     "https://images.inc.com/uploaded_files/image/1920x1080/getty_637367232_405067.jpg",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to change the image index
//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // Automatic image sliding every 4 seconds
//   useEffect(() => {
//     const intervalId = setInterval(goToNext, 4000); // 4000 ms = 4 seconds
//     return () => clearInterval(intervalId); // Cleanup interval on component unmount
//   }, []);

//   // Function to handle radio button change
//   const handleRadioChange = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="slider">
//       <img
//         src={images[currentIndex]}
//         alt={`Slide ${currentIndex}`}
//         className="slider-image"
//       />

//       <div className="radio-buttons">
//         {images.map((_, index) => (
//           <label key={index}>
//             <input
//               type="radio"
//               name="slider"
//               checked={currentIndex === index}
//               onChange={() => handleRadioChange(index)}
//             />
//             <span className="radio-dot"></span>
//           </label>
//         ))}
//       </div>
//       <div className="div">
//         <h1>hiiiiiiiiiii</h1>
//       </div>
//     </div>
//   );
// };
// export default Body;
