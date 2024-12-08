import cv2
import numpy as np

def preprocess_image(image, target_size=(224, 224)):
    """
    画像の前処理を行う関数
    
    Args:
        image: 入力画像（OpenCV形式）
        target_size: モデルの入力サイズ（デフォルト: 224x224）
    
    Returns:
        preprocessed_image: 前処理済みの画像
    """
    try:
        # リサイズ
        resized = cv2.resize(image, target_size)
        
        # BGR to RGB
        rgb_image = cv2.cvtColor(resized, cv2.COLOR_BGR2RGB)
        
        # Normalize
        normalized = rgb_image.astype(np.float32) / 255.0
        
        # Add batch dimension
        preprocessed = np.expand_dims(normalized, axis=0)
        
        return preprocessed
        
    except Exception as e:
        raise Exception(f"画像の前処理中にエラーが発生しました: {str(e)}")

def validate_image(image):
    """
    画像のバリデーションを行う関数
    
    Args:
        image: 入力画像
    
    Returns:
        bool: バリデーション結果
    """
    if image is None:
        return False
    
    if len(image.shape) != 3:
        return False
    
    if image.shape[2] != 3:
        return False
    
    return True
