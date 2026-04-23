from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Atelier Workspace API")


class ClassifyRequest(BaseModel):
    title: str
    content: str


class ClassifyResponse(BaseModel):
    category: str
    tags: List[str]
    summary: str


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/classify", response_model=ClassifyResponse)
def classify_content(payload: ClassifyRequest):
    text = f"{payload.title} {payload.content}".lower()

    if any(keyword in text for keyword in ["project", "model", "demo", "experiment"]):
        category = "模型实验"
        tags = ["project", "experiment"]
    elif any(keyword in text for keyword in ["paint", "drawing", "art", "color", "作品", "画"]):
        category = "画作相关"
        tags = ["art", "visual"]
    else:
        category = "随笔"
        tags = ["writing", "personal"]

    summary = "This is a starter classification result. Replace this endpoint with an LLM or your own Python logic later."
    return ClassifyResponse(category=category, tags=tags, summary=summary)
