"use client";

import { useState } from 'react';

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ title, description, email });
    // Reset form fields
    setTitle('');
    setDescription('');
    setEmail('');
    // Close the form
    setIsOpen(false);
  };

  return (
    <div className="fixed right-3 top-3/4 transform translate-x-1/2 z-50">
      <button
        onClick={toggleForm}
        className="bg-cyan-600 text-white px-1 py-2 rounded-r-lg shadow-lg"
        style={{ width: '30px', height: '100px', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        Feedback
      </button>
      {isOpen && (
        <div className="mt-2 w-72 bg-white p-4 rounded-lg shadow-lg absolute right-full bottom-0 mb-2 mr-2">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="title" className="block text-sm font-medium text-black">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="description" className="block text-sm font-medium text-black">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-cyan-600 focus:border-cyan-600 sm:text-sm"
                style={{ minHeight: '170px', resize: 'none' }}
                required
              ></textarea>
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={toggleForm}
                className="mr-2 bg-gray-400 text-black px-4 py-2 rounded-full"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-cyan-600 text-white px-4 py-2 rounded-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Feedback;
