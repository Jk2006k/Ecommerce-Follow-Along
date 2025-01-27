import React, { useState } from "react";
import "./Form.css"; 

const ProductForm = () => {

  const [formData, setFormData] = useState({

    name: "",
    description: "",
    price: "",
    stock: "",
    images: [],

  });
  const [previewImages, setPreviewImages] = useState([]);

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    
    setFormData({ ...formData, images: files });

    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(prev => [...prev, previewUrls]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("stock", formData.stock);
    formData.images.forEach((image) => data.append("images", image));

    fetch("/upload", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        alert("Product uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to upload product.");
      });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Add Product</h2>

      <div className="form-group">
        <label htmlFor="name">Product Name</label>
        <input
          placeholder="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Product Category</label>

        <select name="Category" placeholder="Select the category" id="Category">
          <option value=" "> </option>
          <option value="Mechanical Watch">Mechanical Watch</option>
          <option value="Automatic Watch">Automatic Watch</option>
          <option value="Quartz Watch">Quartz Watch</option>
          <option value="Smart Watch">Smart Watch</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
        placeholder="Description"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
        placeholder="Price"
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="stock">Stock</label>
        <input
        placeholder="Stock"
          type="number"
          id="stock"
          name="stock"
          value={formData.stock}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="images">Upload Images</label>
        <input
          type="file"
          id="images"
          name="images"
          onChange={handleFileChange}
          multiple
          required
        />
        <div className="image-preview">
          {previewImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Preview ${index + 1}`}
              className="preview-img"
            />
          ))}
        </div>
      </div>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default ProductForm;