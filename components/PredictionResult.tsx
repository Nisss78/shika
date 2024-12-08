interface PredictionResultProps {
  prediction: {
    type: string;
    confidence: number;
  };
}

export default function PredictionResult({ prediction }: PredictionResultProps) {
  return (
    <div className="prediction-box">
      <h3 className="text-xl font-semibold mb-4">識別結果</h3>
      <div className="prediction-text">
        {prediction.type}
      </div>
      <div className="confidence-text">
        信頼度: {prediction.confidence.toFixed(2)}%
      </div>
    </div>
  )
}
