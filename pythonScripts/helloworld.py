import sys, json, numpy

def readIn():
    data = sys.stdin.readlines()
    return data

def main():
    data = readIn()
    print(data)

if __name__ == '__main__':
    main()