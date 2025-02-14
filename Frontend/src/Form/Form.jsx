import React, { useState, useEffect } from 'react';
import './Form.css';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    stock: '',
    images: [],
  });
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`http://localhost:3000/forms/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch product details');
          }
          const data = await response.json();
          setFormData({
            name: data.data.name,
            category: data.data.category,
            description: data.data.description,
            price: data.data.price,
            stock: data.data.stock,
            images: [],
          });
          const imagePreviews = data.data.imgUrl.map(
            (image) => (image.startsWith('http') ? image : `http://localhost:3000${image}`)
          );
          setPreviewImages(imagePreviews);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
      fetchProduct();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviewImages((prev) => [...prev, ...previewUrls]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('category', formData.category);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('stock', formData.stock);
    data.append('userEmail', localStorage.getItem('userEmail'));
    formData.images.forEach((image) => {
      data.append('images', image);
    });

    try {
      const response = await fetch(id ? `http://localhost:3000/forms/update/${id}` : 'http://localhost:3000/forms/create', {
        method: id ? 'PUT' : 'POST',
        body: data,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${response.status} - ${errorText}`);
      }

      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit product.');
    }
  };

  return (
    <div className="form-page">
      <div>
        <div className="topper">
          <h1 className="Heading">Watch Loft</h1>
          <div className='nav'><Navbar /></div>
        </div>
        <br />
        <form className="product-form" onSubmit={handleSubmit}>
          <h2 className="form-title">{id ? 'Edit Product' : 'Add Product'}</h2>
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input type="text" id="category" name="category" value={formData.category} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" value={formData.description} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="stock">Stock</label>
            <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="images">Upload Images</label>
            <input type="file" id="images" name="images" onChange={handleFileChange} multiple />
            <div className="image-preview">
              {previewImages.map((src, index) => (
                <img key={index} src={src} alt={`Preview ${index + 1}`} className="preview-img" />
              ))}
            </div>
          </div>
          <button type="submit" className="submit-button">{id ? 'Save Changes' : 'Submit'}</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;