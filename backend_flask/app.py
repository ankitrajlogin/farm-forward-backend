from fastapi import FastAPI, File, UploadFile
from PIL import Image
import numpy as np
import tensorflow as tf
import io
import uvicorn  # Import uvicorn to run server in Python

app = FastAPI()

# Load ML model
# model = tf.keras.models.load_model("model.h5")

# Preprocess function
def preprocess_image(image) -> np.ndarray:
    image = image.resize((224, 224))  # Resize to model input size
    image = np.array(image) / 255.0   # Normalize
    image = np.expand_dims(image, axis=0)  # Add batch dimension
    return image

@app.get("/")
def home():
    return {"message": "FastAPI is running successfully!"}

@app.get("/test")
def test():
    return {"status": "API is working!"}



@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    try:
        image = Image.open(io.BytesIO(await file.read()))  # Read image
        image = preprocess_image(image)
        
        # prediction = model.predict(image)  # Make prediction
        # predicted_label = np.argmax(prediction, axis=1)[0]  # Get class label
        predicted_label = 345 ; 

        return {"prediction": int(predicted_label)}

    except Exception as e:
        return {"error": str(e)}

# Run FastAPI server on custom port
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)  # Change port here
