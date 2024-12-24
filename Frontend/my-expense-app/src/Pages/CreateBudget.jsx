import React, { useState } from "react";

export default function CreateBudgetForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    monthlyLimit: "",
    category: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData); // Pass data to parent or API
      setFormData({ name: "", description: "", monthlyLimit: "", category: "" }); // Reset form
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-xl font-bold mb-4">Create Budget</h2>

      {/* Name Field */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Budget Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.name ? "border-red-500" : ""
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs italic">{errors.name}</p>
        )}
      </div>

      {/* Description Field */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="3"
        />
      </div>

      {/* Monthly Limit Field */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="monthlyLimit"
        >
          Monthly Limit
        </label>
        <input
          type="number"
          id="monthlyLimit"
          name="monthlyLimit"
          value={formData.monthlyLimit}
          onChange={handleChange}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.monthlyLimit ? "border-red-500" : ""
          }`}
        />
        {errors.monthlyLimit && (
          <p className="text-red-500 text-xs italic">{errors.monthlyLimit}</p>
        )}
      </div>

      {/* Category Field */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="category"
        >
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.category ? "border-red-500" : ""
          }`}
        />
        {errors.category && (
          <p className="text-red-500 text-xs italic">{errors.category}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Budget
        </button>
      </div>
    </form>
  );
}
