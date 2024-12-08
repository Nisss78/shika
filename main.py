import streamlit as st
import cv2
import numpy as np
from utils.image_processor import preprocess_image
from utils.model_handler import DeerClassifier
import os

# Placeholder for future model implementation

# Page config
st.set_page_config(
    page_title="鹿種類識別アプリ",
    page_icon="🦌",
    layout="wide"
)

# Load custom CSS
with open('assets/app_style.css') as f:
    st.markdown(f'<style>{f.read()}</style>', unsafe_allow_html=True)

def main():
    st.title("🦌 鹿種類識別アプリ")
    st.write("画像をアップロードして、鹿の種類を識別しましょう！")

    # Initialize model
    model = DeerClassifier()

    # File uploader
    uploaded_file = st.file_uploader(
        "鹿の画像をアップロードしてください",
        type=['jpg', 'jpeg', 'png']
    )

    if uploaded_file is not None:
        try:
            # Create columns for layout
            col1, col2 = st.columns(2)

            # Read and display the uploaded image
            file_bytes = np.asarray(bytearray(uploaded_file.read()), dtype=np.uint8)
            image = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
            image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

            with col1:
                st.subheader("画像処理オプション")
                keep_aspect = st.checkbox("アスペクト比を維持する", value=True)
                
                # クロップ機能
                st.write("画像のクロップ")
                crop = st.checkbox("クロップを有効にする")
                if crop:
                    # 画像の寸法を取得
                    h, w = image.shape[:2]
                    # クロップ範囲の設定
                    crop_left = st.slider("左端からの位置", 0, w//2, 0)
                    crop_right = st.slider("右端からの位置", w//2, w, w)
                    crop_top = st.slider("上端からの位置", 0, h//2, 0)
                    crop_bottom = st.slider("下端からの位置", h//2, h, h)
                    
                    # クロップの実行
                    image = image[crop_top:crop_bottom, crop_left:crop_right]
                    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
                
                st.subheader("アップロードされた画像")
                st.image(image_rgb, use_column_width=True)

            # Preprocess image
            processed_image = preprocess_image(image, keep_aspect_ratio=keep_aspect)

            # Make prediction
            prediction, confidence = model.predict(processed_image)

            with col2:
                st.subheader("識別結果")
                st.markdown(f"""
                    <div class="prediction-box">
                        <h3>推定される鹿の種類:</h3>
                        <p class="prediction-text">{prediction}</p>
                        <h4>信頼度:</h4>
                        <p class="confidence-text">{confidence:.2f}%</p>
                        
                        
                    </div>
                """, unsafe_allow_html=True)

        except Exception as e:
            st.error(f"エラーが発生しました: {str(e)}")
            st.error("別の画像を試してみてください。")

    # Add information section
    with st.expander("このアプリについて"):
        st.markdown("""
        ### 使い方
        1. 「Browse files」ボタンをクリックして鹿の画像を選択
        2. 自動的に画像が処理され、結果が表示されます
        
        ### 対応している鹿の種類
        - ニホンジカ
        - エゾシカ
        - ヤクシカ
        - その他
        
        ### 注意事項
        - きれいな画像をアップロードすることで、より正確な結果が得られます
        - 画像は自動的にリサイズされます
        """)

if __name__ == "__main__":
    main()
