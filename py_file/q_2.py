for i in range(1,testcase[0]+1) :
    
    if testcase[i] % 15 == 0 :
        algoPrint("FizzBuzz")

    elif testcase[i] % 5 == 0 :
        algoPrint("Buzz")

    elif testcase[i] % 3 == 0 :
        algoPrint("Fizz")
        
    else :
        algoPrint("")
