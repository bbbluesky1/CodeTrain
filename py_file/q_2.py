for i in range(1,testcase[0]+1) :
    
    if testcase[i] % 15 == 0 :
        print("FizzBuzz")

    elif testcase[i] % 5 == 0 :
        print("Buzz")

    elif testcase[i] % 3 == 0 :
        print("Fizz")
        
    else :
        print("")
