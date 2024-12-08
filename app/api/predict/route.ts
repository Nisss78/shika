import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'
import { createCanvas, loadImage } from 'canvas'

async function preprocessImage(imageBuffer: Buffer): Promise<Buffer> {
  try {
    // Resize to 224x224 and convert to RGB format
    const processedImage = await sharp(imageBuffer)
      .resize(224, 224, { fit: 'cover' })
      .toFormat('png')
      .toBuffer()
    
    return processedImage
  } catch (error) {
    console.error('Image preprocessing error:', error)
    throw new Error('画像の前処理に失敗しました')
  }
}

async function predictDeerType(imageBuffer: Buffer): Promise<{ type: string; confidence: number }> {
  try {
    // Load the processed image
    const canvas = createCanvas(224, 224)
    const ctx = canvas.getContext('2d')
    const image = await loadImage(imageBuffer)
    ctx.drawImage(image, 0, 0, 224, 224)
    
    // Get image data and calculate average brightness (simplified demo logic)
    const imageData = ctx.getImageData(0, 0, 224, 224)
    const brightness = Array.from(imageData.data)
      .filter((_, i) => i % 4 === 0)
      .reduce((sum, value) => sum + value, 0) / (224 * 224)
    
    // Demo classification logic based on brightness
    const deerTypes = ["ニホンジカ", "エゾシカ", "ヤクシカ", "その他"]
    const type = deerTypes[0]  // For demo, always return ニホンジカ
    const confidence = 85.5
    
    return { type, confidence }
  } catch (error) {
    console.error('Prediction error:', error)
    throw new Error('予測処理に失敗しました')
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const image = formData.get('image')

    if (!image || !(image instanceof File)) {
      return NextResponse.json(
        { error: '画像ファイルが必要です' },
        { status: 400 }
      )
    }

    // Convert File to Buffer
    const buffer = Buffer.from(await image.arrayBuffer())
    
    // Preprocess image
    const processedImage = await preprocessImage(buffer)
    
    // Make prediction
    const prediction = await predictDeerType(processedImage)

    return NextResponse.json(prediction)
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : '予測中にエラーが発生しました' },
      { status: 500 }
    )
  }
}
