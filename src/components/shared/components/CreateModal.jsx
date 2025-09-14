import { useState } from "react";
import { clinet } from "../../../lib";

const CreateModal = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert("لطفاً عنوان و محتوا رو پر کن 😅");
      return;
    }

    setLoading(true);

    try {
      // برای تست: ببین چی میره سمت API
      console.log("Sending data to API:", { title, content });

      const res = await clinet.post("/api/article", {
        title,
        content,
      });

      console.log("✅ Article Created:", res.data);
      alert("مقاله ساخته شد!");
      onClose(); // بستن مودال بعد از ساخت
    } catch (err) {
      console.error("❌ Error creating article:", err);
      alert("خطا در ساخت مقاله");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
        {/* دکمه بستن */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold"
        >
          ✖
        </button>

        {/* عنوان */}
        <h2 className="text-xl font-semibold mb-4">Create Article</h2>
        <div className="bg-gray-400 h-0.5 w-full rounded-lg mb-3"></div>

        {/* فرم */}
        <div className="flex justify-center items-center flex-col gap-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md outline-none"
            placeholder="Title"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border rounded-md outline-none"
            placeholder="Content"
          ></textarea>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition w-full disabled:opacity-50"
          >
            {loading ? "Posting..." : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;