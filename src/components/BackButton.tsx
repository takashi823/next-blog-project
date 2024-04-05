// 前の画面に戻るためのボタンコンポーネント
"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export function BackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button
      className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none"
      onClick={handleGoBack}
    >
      <FaArrowLeft />
      Back
    </button>
  );
}
