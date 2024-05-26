import os
import json
from pymongo import MongoClient
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)
collection = None

def lambda_handler():

    body = {}
    global collection

    # Establish Connection with Mongodb
    try:
        client = MongoClient(
            "mongodb+srv://rishiagl:1234@v0.bvowwjb.mongodb.net/?retryWrites=true&w=majority&appName=V0")
        db = client.test
        collection = db.Customer
    except Exception as e:
        if hasattr(e, 'message'):
            logger.error(e.message)
        else:
            logger.error(e)

    body = collection.find()
    print(body)

lambda_handler()