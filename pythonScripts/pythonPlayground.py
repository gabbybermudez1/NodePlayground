import sys

def addHandler(args):
    print("you selected add with arguments: ", args)

def subtractHandler(args):
    print("you selected subtract with arguments: ", args)
    


def main():
    command = None

    while(command != "quit"):
        inputCommand = sys.stdin.readline().replace("\n","").split()
        command = inputCommand[0]
        args = inputCommand[1:] #serves as a set of arguments

        print("Command Selected was: ", command, "\n ")
        print("Args are : ", args)


        if command == "add":
            addHandler(args)
        
        if command =="subtract":
            subtractHandler(args)

        
        

if __name__ == "__main__":
    main()
    