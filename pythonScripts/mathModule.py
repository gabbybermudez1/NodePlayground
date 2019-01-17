import sys, json, numpy as np


# notes: need to modify this to accept json data luje:
# '{"command": "add" }'


def readIn():
    # stdInput = json.loads(sys.stdin.readlines())
    # command = stdInput[0]
    # args = stdInput[1:]
    jsonData = json.dumps({"command": "add"})
    print(type(jsonData))
    return jsonData


    
def main():
    stdInput = readIn()
    

if __name__ == '__main__':
    main()