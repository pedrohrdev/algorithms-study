/*
Binary search is an algorithm whose motto is: divide and conquer;

It works like this: we have an ordered list with 100 numbers;

You try to guess a number, always in the middle. Let's suppose Mike is thinking of a number. If your guess is greater or less than Mike's number, he says 'greater' or 'less';

Remember: divide and conquer, so we start with 50:

-- Mike: It's greater;

So we know that 50 is GREATER than the number he's thinking of, because we already know that all the numbers from 50 to 100 are even greater. Therefore, we can DISCARD these numbers, REDUCING the size of the list until we guess the number Mike is thinking of;

Great! Now let's go to the next guess.

We have between 1 and 49, let's guess 25:

-- Mike: It's less;

We know that 25 is LESS than the number he's thinking of, so
we can DISCARD all the numbers between 1 and 25 because they are even SMALLER;

Now we have between 26 and 49, let's guess 37:

-- Mike: It's bigger;

Now we know that between 26 and 49, 37 is bigger, so all the numbers after
37 will be even bigger, so we discard 37 and its consecutive numbers,

Okay, we're close! Now we have between 26 and 37, the middle number
between 26 and 37 is 31, let's guess 31:

-- Mike: It's smaller;

Oh, no! Okay, okay, now we know that 31 is smaller than the
number he's thinking of, so all the numbers before 31 will also be
smaller, so we discard the numbers smaller than 31;

Now we have between 32 and 37, the intermediate number is 34, let's guess 34:

-- Mike: 34 is greater than the number I'm thinking of;

Okay, if 34 is greater than the number he's thinking of, and we have from 34 to 37, we can discard them and keep only 32 and 33, let's guess 32;

-- Mike: You got it right!!!

Now let's review: from a list of 100 numbers, if we had used a simple search, in the worst-case scenario we would have had to try 100 times. Now, with binary search, we go from: 100 -> 50 -> 37 -> 31 -> 34 -> !!32!!, see, only 6 attempts.

In the worst-case scenario with binary search, we had to ask 6 times; In the worst possible scenario, with a simple search, we would have to ask 100 times.

\*/

function binary_search(list, item) {

    let low = 0;
    let high = list.length - 1;

    while(low <= high) {

        let mid = Math.floor((low + high) / 2);
        
        let guess = list[mid];


        if(guess === item) {

            return mid;

        } else if(guess > item) { 

        //            i     g
        // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

            high = mid - 1;

        } else if(guess < item) {

        //      g     i  
        // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]            

            low = mid + 1;

        }

    }

    return None

}

const my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binary_search(my_list, 4))