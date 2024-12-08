import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'

async function analyzeImage(imageBuffer: Buffer): Promise<{ averageBrightness: number }> {
  try {
    const { data, info } = await sharp(imageBuffer)
      .resize(224, 224, { fit: 'cover' })
      .grayscale()
      .raw()
      .toBuffer({ resolveWithObject: true })

    const averageBrightness = Array.from(data).reduce((sum, value) => sum + value, 0) / (info.width * info.height)
    return { averageBrightness }
  } catch (error) {
    console.error('Image analysis error:', error)
    throw new Error('画像の解析に失敗しました')
  }
}

async function predictDeerType(imageStats: { averageBrightness: number }): Promise<{ type: string; confidence: number }> {
  const deerTypes = ["ニホンジカ", "エゾシカ", "ヤクシカ", "その他"]
  
  // デモ用の簡易的な分類ロジック
  const type = deerTypes[0]  // デモのため常にニホンジカを返す
  const confidence = 85.5

  return { type, confidence }
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

    const buffer = Buffer.from(await image.arrayBuffer())
    const imageStats = await analyzeImage(buffer)
    const prediction = await predictDeerType(imageStats)

    return NextResponse.json(prediction)
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : '予測中にエラーが発生しました' },
      { status: 500 }
    )
  }
}
