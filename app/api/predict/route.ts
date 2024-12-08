import { NextRequest, NextResponse } from 'next/server'

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

    // TODO: 実際のモデル予測ロジックを実装
    // デモ用の仮の応答
    const prediction = {
      type: "ニホンジカ",
      confidence: 85.5
    }

    return NextResponse.json(prediction)
  } catch (error) {
    console.error('Prediction error:', error)
    return NextResponse.json(
      { error: '予測中にエラーが発生しました' },
      { status: 500 }
    )
  }
}
