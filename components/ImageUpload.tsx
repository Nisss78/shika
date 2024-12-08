'use client'

interface ImageUploadProps {
  onUpload: (file: File) => void;
}

export default function ImageUpload({ onUpload }: ImageUploadProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      onUpload(file)
    }
  }

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="imageUpload"
      />
      <label
        htmlFor="imageUpload"
        className="cursor-pointer inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        画像をアップロード
      </label>
      <p className="mt-2 text-sm text-gray-600">
        対応フォーマット: JPG, JPEG, PNG
      </p>
    </div>
  )
}
