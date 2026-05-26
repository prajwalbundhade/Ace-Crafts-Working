import React, { useState } from "react";
import axios from "axios";
import AdminLayout from "../../layouts/AdminLayout";
import { AuthToken } from "../../Api/Api";
import Swal from "sweetalert2";

function AddPost() {
  const [formData, setFormData] = useState({
    index: "1",
    title: "",
    category: "",
    isActive: true,
    isNewMod: false,
    state: "",
    mediaContent: [],
    description: "",
    buyNow: "",
    price: "",
    bookNow: "",
    newbuynow: "",
  });

  const [newMedia, setNewMedia] = useState({
    imageUrl: "",
    ytLink: "",
    isRealVideo: false,
    isRefVideo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleMediaInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      // If checking Real Video, uncheck Ref Video and vice versa
      if (name === "isRealVideo" && checked) {
        setNewMedia({
          ...newMedia,
          isRealVideo: true,
          isRefVideo: false,
        });
      } else if (name === "isRefVideo" && checked) {
        setNewMedia({
          ...newMedia,
          isRealVideo: false,
          isRefVideo: true,
        });
      } else {
        setNewMedia({
          ...newMedia,
          [name]: checked,
        });
      }
    } else {
      setNewMedia({
        ...newMedia,
        [name]: value,
      });
    }
  };

  const handleAddMedia = () => {
    if (newMedia.imageUrl.trim() !== "") {
      setFormData({
        ...formData,
        mediaContent: [...formData.mediaContent, { ...newMedia }],
      });
      // Reset new media input
      setNewMedia({
        imageUrl: "",
        ytLink: "",
        isRealVideo: false,
        isRefVideo: false,
      });
    }
  };

  const removeMedia = (index) => {
    const updatedMedia = formData.mediaContent.filter((_, i) => i !== index);
    setFormData({ ...formData, mediaContent: updatedMedia });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    axios
      .post("https://teamacecrafts.com/api/posts/new", formData, {
        headers: {
          Authorization: "Bearer " + AuthToken(),
        },
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Post Created",
          html: `
            Title: ${formData.title}<br>
          `,
        });
        handleClear();
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        Swal.fire({
          icon: "error",
          title: "Post Creation Failed",
          text: error.response
            ? error.response.data.message
            : "An error occurred.",
        });
      });
  };

  const handleClear = () => {
    setFormData({
      title: "",
      category: "",
      isActive: true,
      isNewMod: false,
      state: "",
      mediaContent: [],
      description: "",
      buyNow: "",
      price: "",
      bookNow: "",
      newbuynow: "",
    });
    setNewMedia({
      imageUrl: "",
      ytLink: "",
      isRealVideo: false,
      isRefVideo: false,
    });
  };

  return (
    <div className="admin-form-shell">
      <h2>
        Add New Post
      </h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="text-lg">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          >
            <option value="">Select a category</option>
            {["High Quality Mods", "Roleplay Mods", "Trending Mods"].map(
              (category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              )
            )}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="state" className="text-lg">
            State
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          >
            <option value="">Select a state</option>
            {["Mod"].map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="admin-form-toggle-grid">
          <label className="admin-form-toggle">
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
            />
            <span>Status Active</span>
          </label>
          <label className="admin-form-toggle">
            <input
              type="checkbox"
              name="isNewMod"
              checked={formData.isNewMod}
              onChange={handleChange}
            />
            <span>New Mod</span>
          </label>
        </div>

        {/* Media Content Section */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Media Content</label>
          
          {/* Display existing media items */}
          {formData.mediaContent.length > 0 && (
            <div className="mt-2 space-y-4">
              {formData.mediaContent.map((media, index) => (
                <div key={index} className="admin-media-item">
                  <div className="admin-media-header">
                    <span className="font-medium">Media Item #{index + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeMedia(index)}
                      className="admin-btn admin-btn-danger"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <div>Image URL: {media.imageUrl}</div>
                    <div>YouTube Link: {media.ytLink || 'None'}</div>
                    <div>Video Type: {media.isRealVideo ? 'Real Video' : media.isRefVideo ? 'Reference Video' : 'No Video Type'}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add new media form */}
          <div className="admin-media-item">
            <h3 className="font-medium mb-3">Add New Media</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm mb-1">Image URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={newMedia.imageUrl}
                  onChange={handleMediaInputChange}
                  className="border rounded-lg p-2 w-full"
                  placeholder="Enter image URL"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">YouTube Link (Optional)</label>
                <input
                  type="text"
                  name="ytLink"
                  value={newMedia.ytLink}
                  onChange={handleMediaInputChange}
                  className="border rounded-lg p-2 w-full"
                  placeholder="Enter YouTube link"
                />
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="isRealVideo"
                    checked={newMedia.isRealVideo}
                    onChange={handleMediaInputChange}
                    className="w-4 h-4"
                  />
                  <label className="text-sm">Real Video</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="isRefVideo"
                    checked={newMedia.isRefVideo}
                    onChange={handleMediaInputChange}
                    className="w-4 h-4"
                  />
                  <label className="text-sm">Reference Video</label>
                </div>
              </div>
              <button
                type="button"
                onClick={handleAddMedia}
                className="admin-btn admin-btn-muted w-full"
              >
                Add Media Item
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="buyNow" className="text-lg">
            Buy Now Link
          </label>
          <input
            type="text"
            id="buyNow"
            name="buyNow"
            value={formData.buyNow}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="text-lg">
            Mod Price ($)
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="bookNow" className="text-lg">
            Book Now (Write 'ok' to enable button)
          </label>
          <input
            type="text"
            id="bookNow"
            name="bookNow"
            value={formData.bookNow}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="newbuynow" className="text-lg">
            New Buy Now (Write 'ok' to enable button)
          </label>
          <input
            type="text"
            id="newbuynow"
            name="newbuynow"
            value={formData.newbuynow}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
        </div>

        {/* Submit and Clear buttons */}
        <div className="admin-form-actions">
          <button
            type="submit"
            className="admin-btn admin-btn-primary"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="admin-btn admin-btn-muted"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

function Add() {
  return <AdminLayout Content={<AddPost />} />;
}

export default Add;
