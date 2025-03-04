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
    imagePath: '',
    description: '',
    buyNow: '',
    ytLink: '',
    price: '',
    bookNow: '',
    newbuynow: ''
  });

  // Fetch the post details on component mount
  useEffect(() => {
    const fetchPostData = async () => {
      console.log("Fetching post with ID:", id);  // Check if ID is correct
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setFormData(response.data);
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

  // Handle post update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:5000/api/posts/${id}`, formData);
      Swal.fire('Success', 'Post updated successfully', 'success');
      navigate('/Admin/Posts'); // Redirect to the list of posts after successful update
    } catch (error) {
      console.error("Error updating post:", error);
      Swal.fire('Error', 'Failed to update post', 'error');
    }
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
            {["Minecraft But Mods & Plugins", "Premium Mods & Plugins", "Trending Packages", "New Models", "Discounted Mods"].map((category, index) => (
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
            {["Mod", "Plugin", "Datapack", "Package"].map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="imagePath" className="text-lg">Picture URL</label>
          <input
            type="text"
            id="imagePath"
            name="imagePath"
            value={formData.imagePath}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          />
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
          <label htmlFor="ytLink" className="text-lg">YouTube Video Link</label>
          <input
            type="text"
            id="ytLink"
            name="ytLink"
            value={formData.ytLink}
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

        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            Update Post
          </button>
          <button
            type="button"
            onClick={() => setFormData({
              title: '',
              category: '',
              state: '',
              imagePath: '',
              description: '',
              buyNow: '',
              ytLink: '',
              price: '',
              bookNow: '',
              newbuynow: ''
            })}
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
