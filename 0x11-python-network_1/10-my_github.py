#!/usr/bin/python3
""" Script takes username and password and uses the API to display id """
from sys import argv
import requests
from requests.auth import HTTPBasicAuth

if __name__ == "__main__":
    url = 'https://api.github.com/user'
    username = argv[1]
    password = argv[2]
    responses = requests.get(url, auth=HTTPBasicAuth(username, password))
    print(responses.json().get('id'))
