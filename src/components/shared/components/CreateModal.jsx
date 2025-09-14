const CreateModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold"
        >
          ✖
        </button>
        <h2 className="text-xl font-semibold mb-4">Create Post</h2>
        <div className="bg-gray-400 h-0.5 w-full rounded-lg mb-3"></div>
        <div className="flex justify-center items-center flex-col gap-3">
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md outline-none"
            placeholder="Title"
          />
          <textarea
            className="w-full px-3 py-2 border rounded-md outline-none"
            placeholder="Content"
          ></textarea>
          <input
            type="file"
            className="w-full px-3 py-2 border rounded-md outline-none"
            placeholder="Image"
          />
          <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition w-full">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
