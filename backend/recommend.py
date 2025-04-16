import numpy as np
from pymongo import MongoClient
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

client = MongoClient("mongodb://localhost:27017/")
db = client["shadow_moses"]
user_collection = db["userdetails"]

def fetch_users():
    return list(user_collection.find({}, {"_id": 1, "skills": 1, "interests": 1, "department": 1}))

def preprocess_user(user):
    return " ".join([
        user.get("skills", ""),
        user.get("interests", ""),
        user.get("department", "")
    ]).lower()

def build_recommendations(target_user_id, top_k=5):
    users = fetch_users()
    ids = [str(user["_id"]) for user in users]
    corpus = [preprocess_user(u) for u in users]

    tfidf = TfidfVectorizer()
    tfidf_matrix = tfidf.fit_transform(corpus)
    sim_matrix = cosine_similarity(tfidf_matrix)

    index = ids.index(target_user_id)
    sim_scores = list(enumerate(sim_matrix[index]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    top_users = [ids[i] for i, score in sim_scores[1:top_k+1]]
    return top_users
