'use client'

import { useState } from 'react'
import Image from 'next/image'
import ImageUpload from '@/components/ImageUpload'
import PredictionResult from '@/components/PredictionResult'

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [prediction, setPrediction] = useState<{ type: string; confidence: number } | null>(null)

  const handleImageUpload = async (file: File) => {
    try {
      const formData = new FormData()
      formData.append('image', file)

      const response = await fetch('/api/predict', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('予測に失敗しました')
      }

      const data = await response.json()
      setPrediction(data)
      setSelectedImage(URL.createObjectURL(file))
    } catch (error) {
      console.error('Error:', error)
      alert('エラーが発生しました。もう一度お試しください。')
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-8">🦌 鹿種類識別アプリ</h1>
      <p className="mb-6">画像をアップロードして、鹿の種類を識別しましょう！</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <ImageUpload onUpload={handleImageUpload} />
          {selectedImage && (
            <div className="mt-4">
              <Image
                src={selectedImage}
                alt="アップロードされた画像"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          )}
        </div>

        <div>
          {prediction && <PredictionResult prediction={prediction} />}
        </div>
      </div>

      <div className="mt-8">
        <details className="bg-white rounded-lg p-4 shadow">
          <summary className="font-semibold cursor-pointer">このアプリについて</summary>
          <div className="mt-4">
            <h3 className="font-bold mb-2">使い方</h3>
            <ol className="list-decimal list-inside mb-4">
              <li>「ファイルを選択」ボタンをクリックして鹿の画像を選択</li>
              <li>自動的に画像が処理され、結果が表示されます</li>
            </ol>

            <h3 className="font-bold mb-2">対応している鹿の種類</h3>
            <ul className="list-disc list-inside">
              <li>ニホンジカ</li>
              <li>エゾシカ</li>
              <li>ヤクシカ</li>
              <li>その他</li>
            </ul>
          </div>
        </details>
      </div>
    </main>
  )
}
