/\*
Binary search is an algorithm whose motto is: divide and conquer;

So it works like this: we have an ordered list with 100 numbers;

You guess a number, always in the middle. Let's suppose Mike is
thinking of a number. If your guess is greater or less than Mike's
number, he says 'greater' or 'less';

Remember: divide and conquer, so we start with 50:

-- Mike: is greater;

So we know that 50 is GREATER than the number he is thinking
of, because we already know that all the numbers from 50 to 100
are even greater. Therefore, we can DISCARD these numbers, REDUCING
the size of the list until we guess the number Mike is thinking of;

Great! Now let's move on to the next guess.We
have between 1 and 49, we'll guess 25:

-- Mike: It's smaller;

So we know that 25 is SMALLER than the number he's thinking of, so
we can DISCARD all the numbers between 1 and 25 because they are even SMALLER;

Now we have between 26 and 49, we'll guess 37:

-- Mike: It's larger;

Now we know that between 26 and 49, 37 is larger, so all the numbers after
37 will be even larger, so we discard 37 and its consecutive numbers,

Okay, we're close! Now we have between 26 and 37, the middle number
between 26 and 37 is 31, we'll guess 31:

-- Mike: It's smaller;

Oh no! Okay, okay, now we know that 31 is smaller than the
number he's thinking of, so all the numbers before 31 will also
be smaller, so we discard the numbers smaller than 31;

Now we have between 32 and 37, the intermediate number is 34, we'll guess 34:

-- Mike: 34 is larger than the number I'm thinking of;

Okay, if 34 is larger than the number he's thinking of, and we
have from 34 to 37, we can discard them and only keep 32 and 33, we'll guess 32;

-- Mike: You got it right!!!

Now let's review: from a list of 100 numbers, if we had used a simple search, in
the worst-case scenario we would have had to try 100 times. Now, with binary
search, we went from: 100 -> 50 -> 37 -> 31 -> 34 -> !!32!!, see, only 6 attempts.

In the worst-case scenario with binary search, we had to ask 6 times; in the worst-case
scenario with simple search, we would have had to ask 100 times.

\*/
