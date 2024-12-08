import cv2
import numpy as np

def preprocess_image(image, target_size=(224, 224), keep_aspect_ratio=True):
    """
    画像の前処理を行う関数
    
    Args:
        image: 入力画像（OpenCV形式）
        target_size: モデルの入力サイズ（デフォルト: 224x224）
        keep_aspect_ratio: アスペクト比を維持するかどうか（デフォルト: True）
    
    Returns:
        preprocessed_image: 前処理済みの画像
    """
    try:
        if keep_aspect_ratio:
            # アスペクト比を保持したリサイズ
            h, w = image.shape[:2]
            target_w, target_h = target_size
            aspect = w / h
            
            if w > h:
                new_w = target_w
                new_h = int(new_w / aspect)
            else:
                new_h = target_h
                new_w = int(new_h * aspect)
                
            resized = cv2.resize(image, (new_w, new_h))
            
            # パディング
            delta_w = target_w - new_w
            delta_h = target_h - new_h
            top, bottom = delta_h//2, delta_h-(delta_h//2)
            left, right = delta_w//2, delta_w-(delta_w//2)
            
            resized = cv2.copyMakeBorder(
                resized, top, bottom, left, right,
                cv2.BORDER_CONSTANT, value=[0, 0, 0]
            )
        else:
            # 単純なリサイズ
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
