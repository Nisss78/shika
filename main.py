import streamlit as st
import cv2
import numpy as np
from utils.image_processor import preprocess_image
from utils.model_handler import DeerClassifier
import os

def get_deer_description(deer_type):
    descriptions = {
        "ニホンジカ": """
        <ul>
            <li>体長: オス120-190cm、メス110-160cm</li>
            <li>特徴:</li>
            <ul>
                <li>夏毛は赤褐色、冬毛は灰褐色</li>
                <li>尾は短く、尾の周りに白い毛</li>
                <li>オスは角を持ち、年齢とともに枝分かれが増える</li>
            </ul>
            <li>生息地: 本州、四国、九州の森林地帯</li>
            <li>食性: 草食性（若葉、樹皮、果実など）</li>
        </ul>
        """,
        "エゾシカ": """
        <ul>
            <li>体長: オス170-190cm、メス150-170cm</li>
            <li>特徴:</li>
            <ul>
                <li>ニホンジカより大型</li>
                <li>冬毛は灰色がかった茶色</li>
                <li>尾の上部に大きな白斑</li>
            </ul>
            <li>生息地: 北海道全域</li>
            <li>食性: 草本類、木の葉、樹皮など</li>
        </ul>
        """,
        "ヤクシカ": """
        <ul>
            <li>体長: オス110-130cm、メス100-120cm</li>
            <li>特徴:</li>
            <ul>
                <li>ニホンジカの亜種で、より小型</li>
                <li>体色は暗褐色</li>
                <li>島嶼性矮小化の典型例</li>
            </ul>
            <li>生息地: 屋久島</li>
            <li>食性: 下層植生、シダ類など</li>
        </ul>
        """,
        "その他": """
        <ul>
            <li>判別が難しい個体、または上記以外の種類の可能性があります。</li>
            <li>より明確な特徴が必要な場合は、別の角度からの写真を試してみてください。</li>
        </ul>
        """
    }
    return descriptions.get(deer_type, "情報がありません。")

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
                st.subheader("アップロードされた画像")
                st.image(image_rgb, use_column_width=True)

            # Preprocess image
            processed_image = preprocess_image(image)

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
                        
                        <div class="deer-details">
                            <h4>特徴と解説:</h4>
                            {get_deer_description(prediction)}
                        </div>
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
