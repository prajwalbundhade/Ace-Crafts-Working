import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import Swal from 'sweetalert2';

const NewEditPost = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    state: '',
    mediaContent: [],
    description: '',
    buyNow: '',
    ytLink: '',
    price: '',
    bookNow: '',
    newbuynow: ''
  });
  const [newMedia, setNewMedia] = useState({
    imageUrl: '',
    ytLink: '',
    isRealVideo: false,
    isRefVideo: false
  });

  // Fetch the post details on component mount
  useEffect(() => {
    const fetchPostData = async () => {
      console.log("Fetching post with ID:", id);  // Check if ID is correct
      try {
        const response = await axios.get(`https://teamacecrafts.com/api/posts/${id}`);
        const postData = response.data;

        // Convert old format to new format if necessary
        if (Array.isArray(postData.imagePath)) {
          postData.mediaContent = postData.imagePath.map((imageUrl, index) => ({
            imageUrl,
            ytLink: index === 0 ? postData.ytLink : '',
            isRealVideo: index === 0 && postData.ytLink ? true : false,
            isRefVideo: index > 0 && postData.ytLink ? true : false
          }));
          delete postData.imagePath;
          delete postData.ytLink;
        }

        setFormData(postData);
      } catch (error) {
        console.error("Error fetching post data:", error);
        Swal.fire('Error', 'Failed to fetch post data', 'error');
      }
    };
    fetchPostData();
  }, [id]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMediaInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      // If checking Real Video, uncheck Ref Video and vice versa
      if (name === 'isRealVideo' && checked) {
        setNewMedia({
          ...newMedia,
          isRealVideo: true,
          isRefVideo: false
        });
      } else if (name === 'isRefVideo' && checked) {
        setNewMedia({
          ...newMedia,
          isRealVideo: false,
          isRefVideo: true
        });
      } else {
        setNewMedia({
          ...newMedia,
          [name]: checked
        });
      }
    } else {
      setNewMedia({
        ...newMedia,
        [name]: value
      });
    }
  };

  const handleAddMedia = () => {
    if (newMedia.imageUrl.trim() !== "") {
      setFormData({
        ...formData,
        mediaContent: [...formData.mediaContent, { ...newMedia }]
      });
      // Reset new media input
      setNewMedia({
        imageUrl: '',
        ytLink: '',
        isRealVideo: false,
        isRefVideo: false
      });
    }
  };

  const removeMedia = (index) => {
    const updatedMedia = formData.mediaContent.filter((_, i) => i !== index);
    setFormData({ ...formData, mediaContent: updatedMedia });
  };

  // Handle post update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`https://teamacecrafts.com/api/posts/${id}`, formData);
      Swal.fire('Success', 'Post updated successfully', 'success');
      navigate('/Admin/Posts'); // Redirect to the list of posts after successful update
    } catch (error) {
      console.error("Error updating post:", error);
      Swal.fire('Error', 'Failed to update post', 'error');
    }
  };

  const handleClear = () => {
    setFormData({
      title: '',
      category: '',
      state: '',
      mediaContent: [],
      description: '',
      buyNow: '',
      price: '',
      bookNow: '',
      newbuynow: ''
    });
    setNewMedia({
      imageUrl: '',
      ytLink: '',
      isRealVideo: false,
      isRefVideo: false
    });
  };

  return (
    <div
      style={{ width: '900px' }}
      className="shadow-md flex-row px-1 mt-5 items-center pt-2 pb-2 mb-2 justify-center rounded-lg ml-10 bg-white"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center hover:text-indigo-500">Edit Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full p-1">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg">Title</label>
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
          <label htmlFor="category" className="text-lg">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          >
            <option value="">Select a category</option>
            {["High Quality Mods", "Roleplay Mods", "Trending Mods"].map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="state" className="text-lg">State</label>
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

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Media Content</label>
          
          {/* Display existing media items */}
          {formData.mediaContent.length > 0 && (
            <div className="mt-2 space-y-4">
              {formData.mediaContent.map((media, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium">Media Item #{index + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeMedia(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg"
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
          <div className="mt-4 p-4 border rounded-lg bg-gray-50">
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
                className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
              >
                Add Media Item
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg">Description</label>
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
          <label htmlFor="buyNow" className="text-lg">Buy Now Link</label>
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
          <label htmlFor="price" className="text-lg">Mod Price ($)</label>
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
          <label htmlFor="bookNow" className="text-lg">Book Now (Write 'ok' to enable button)</label>
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
          <label htmlFor="newbuynow" className="text-lg">New Buy Now (Write 'ok' to enable button)</label>
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
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Update Post
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};
function EditPost() {
  return <AdminLayout Content={<NewEditPost />} />;
}

export default EditPost;
