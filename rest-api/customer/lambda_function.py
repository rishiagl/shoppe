import os
import json
from pymongo import MongoClient
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)
collection = None


def lambda_handler(event, context):

    logger.info(event)
    body = {}
    statusCode = 200
    headers = {
        "Content-Type": "application/json"
    }
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
        body = {"error": "Error With Database, Please Contact Service Provider"}
        statusCode = 503
        res = {
            "statusCode": statusCode,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": body
        }
        return res

    try:
        if event['routeKey'] == "GET /customer/{phone_no}":
            cursor = collection.find(
                {'phone_no': event['pathParameters']['phone_no']})
            for doc in cursor:
                body  = doc
        elif event['routeKey'] == "GET /customer":
            cursor = collection.find({})
            body = []
            for doc in cursor:
                body.append(doc)
    except KeyError:
        statusCode = 400
        body = 'Unsupported route: ' + event['routeKey']
        logger.error(body)
    body = json.dumps(body, default=str)
    res = {
        "statusCode": statusCode,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": body
    }
    logger.info(res)
    return res
