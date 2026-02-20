from fastapi import FastAPI
from routes.chat import router as chat_router
from routes.compare import router as compare_router
from routes.analyze import router as analyze_router
from routes.strategy import router as strategy_router
from routes.calendar import router as calendar_router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="BLOOMELLA - AI Prompt Optimization Engine")

app.include_router(chat_router)
app.include_router(compare_router)
app.include_router(analyze_router)
app.include_router(strategy_router)
app.include_router(calendar_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # later restrict
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "BLOOMELLA is running "}

@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "message": "Social Media Manager AI backend running"
    }
