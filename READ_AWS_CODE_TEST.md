
## QUESTION 1 

     
            - Amazons database doesn't support very large numbers,so numbers are stored as a string of binary characters, O' ' and 1'. 
            Accidentally, a '!' was entered at some positions and it is unknown whether they should be 'O' or '1;

            The string of incorrect data is made up of the characters "0", "1"  and '!', where '!' is the character that got entered incorrectly.

            '!'  can be replaced with either 'O' or '1'.  Due to some internal faults, some errors are generated every time 'O' and '1'  occur together as

            '01' or '10'  in any subsequence of the string.  It si observed that the number of errors a subsequence '01' generates is x, while a subsequence '10' generates y errors.
            Determine the minimum total errors generated. Since the answer can be very large, return it modulo 10^9 +7.

            The minimum number of errors is min(2, 3) modulo (10^9 + 7) = 8.



            •The first line contains a string, errorString.
            •The next line contains an integer, .x
            •The next line contains an integer, y.

            ==>  Sample Case 0

            • Sample Input For Custom Testing
            • STDIN                                   FUNCTION
            --------------------------------------------------------------
            •010            --->                    errorString = "01!0"
            •2              --->                    x = 2
            •3              --->                    y = 3

            • Sample Output
            • 8 


            • Explanation

            • The better string is 0100 with one substring 01 and two substrings 10 making total errors generated = 2×1 + 3×2 = 8.
            
            
             ==>  Sample Case 1

            • Sample Input For Custom Testing
            • STDIN                                     FUNCTION      
            --------------------------------------------------------------
            • !!!!!!!          -->                    errorString = '!!!!!!!"
            • 23               -->                     x = 23 
            • 47               -->                     y = 47 

            • Sample Output
            • 0 


            • Explanation 
 
            • There is a tie for the best string generated, 00000 or 11111, with zero substrings  01 or 10
   


         solution :

         ```
            const fn = (errorString, x , y) => {

                        const zeroResult = helper("0", errorString, x, y)
                        const oneResult = helper("1", errorString, x, y)
                        if(zeroResult === oneResult) return 0;
                        return zeroResult < oneResult ? zeroResult: oneResult
                   }


            const helper = (zeroOrOne, str, x , y )=> {

                            str = str.replace(/!/g, zeroOrOne);
                            const result = [];
                            for(let i = 0; i < str.length; i++){
                                    const s = "" +  str[i];
                                    result.push(s)

                                for(let b = i +1 ; b < str.length; b++){
                                        result.push(s + str[b]);
                                }
                            }

                        return (x *  result.filter(e => e === '01').length)  +  (y *  result.filter(e => e === '10').length);
                   }


                const result = fn("!!!!!!!", 23, 47)
                console.log("new String ==>", result);
         ```

##  Question 2 


         - PnL (Profit and Loss) is an  Array of integers ,

           As part of the analysis, you wil perform the following operation on the PnL array,  any  number of times:

            • Choose any month i ( 0 <= i < n ) and multiply PnL[i] by -1
            

       
        
            ex : 
                    have a negative PnL, such that the cumulative PnL  for each of the n months remains strictly positive
            
                    i.e. remains greater than O

        Note:
            - The cumulative PnL for the i`th  month is defined as the sum of PnL from the starting month up to the i`th  month. 
            
            ex :  the cumulative PnL for the PnL = [3, -2 , 5 , - 6 ,  1 ] is  [3,1, 6, 0, 1] 


             Find the maximum number of months you can afford to face a loss.

            
            solution ===> 
            ```
             function generateNegativeCombinations(arr) {

                                                    const results = [];
                                                    const n = arr.length;
                                                    const totalCombinations = Math.pow(2, n); // 2^n combinations

                                                    for (let i = 0; i < totalCombinations; i++) {
                                                        const combination = [];
                                                        let temp = i;

                                                        for (let j = 0; j < n; j++) {
                                                            if (temp % 2 === 0) {
                                                                combination.push(arr[j]);
                                                            } else {
                                                                combination.push(-arr[j]);
                                                            }
                                                            temp = Math.floor(temp / 2);
                                                        }

                                                        results.push(combination);
                                                    }

                                                    return results;
                    }



            const fn = (combinations)=> {
                                            let count = 0

                                            for(let b = 0; b < combinations.length; b ++){
                                                    const combination = combinations[b]
                                                    const isPositive = geTotal(combination)
                                                    let numberOFNegatives = combination.filter(e => e < 0).length;

                                                if(isPositive){
                                                    if(numberOFNegatives > count){
                                                         count = numberOFNegatives;
                                                    }
                                                }
                                            }

                                            console.log("count ===> ", count)
                                            return count;
                }



            const geTotal = (pnl) => {
                                        let acc = new Array(pnl.length).fill(null)
                                        acc[0] = pnl[0]
                                        let isPositive = false;
                                        
                                        for(let i = 1; i < pnl.length; i ++){
                                            acc[i] = acc[i-1] + pnl[i] 
                                        }

                                        if(acc[acc.length - 1] > 0){
                                            isPositive = true;
                                        }
                                        return isPositive; 
                    }


            const combinations = generateNegativeCombinations([5,3,1,2]);
            fn(combinations)
            ```


## Question 3 

                    - The interns at Amazon were asked to review the company's stock value over a period.
                    - Given the stock prices of n months,
                    - the net price change for the i`th  month is defined as:
                                                                            - the absolute difference between:
                                                                                                            - the average of stock prices : 
                                                                                                                                                - for the first i months
                                                                                                                                                        and 
                                                                                                                                                - for the remaining (n - i)  months where 1 < i < n.

                    - Note:
                        -  that these averages are rounded down to an integer

                    - Given an array of stock prices,
                    - find the month at which the net price change is minimum.
                    - If there are several such months. return the earliest month


                    - Note:
                        - The average of a set of integers here is defined as the sum of integers divided by
                            the number of integers, rounded down to the nearest integer. For example, the average
                            of [1, 2, 3, 4] is the floor of ( 1 +2 + 3+ 4 )/ 4 =2.5 and the floor of 2.5 is 2.



     solution ==> 


                ```
                const findAverage = (newArr) => {
                            const n = newArr.length;
                            const total = newArr.reduce((acc, e)=> {
                                        return acc = acc + e;
                            }, 0)
                            return Math.floor(total/n);
                        }


                const findNetPriceChange = (arr) => {
                            let minimumNetPriceChange = 0
                            const length = arr.length;
                            if(!length) return minimumNetPriceChange;
                            const result = {}
                            for(let i = 0; i < length - 1 ; i ++){
                                const firstArr = arr.slice(0, i+1);
                                const remainArr = arr.slice(i+1, length );
                                const firstAvg = findAverage(firstArr);
                                const remainAvg = findAverage(remainArr);
                                
                                const netPriceChange = Math.abs( firstAvg - remainAvg);
                                
                                if(result[netPriceChange]){
                                    result[netPriceChange] = [...result[netPriceChange], i ]
                                }
                                else {
                                result[netPriceChange] = [i]
                                }
                            }
                            
                            const resultKeys = Object.keys(result);
                            const minimumKey  = Math.min(...resultKeys.map(e => parseInt(e)))
                            minimumNetPriceChange = result[minimumKey][0] + 1
                            
                            console.log(" minimumNetPriceChange. ==> ", minimumNetPriceChange);
                            return minimumNetPriceChange
                        }
                        
                findNetPriceChange([1, 3, 2, 3]);

                ```



## question 4   smashing unlike 
                    - Amazon recently launched a new game, Fruit Crush! In this game, 
                    - you are allowed to choose two dissimilar fruits and crush them.
                    - Each type of fruit is represented as an integer in an array.
                    - Formally you can choose any two unequal integers in the array and delete them.
                    - Given an array fruits of size n,
                    - return the minimum possible number of fruits left after the given operation is performed any number of times


                solution  =====> 
                ```
                    const  fn = (arr) => {
                        for(let i = 0; i < arr.length ; i ++){
                            const current = arr[i];
                            if(current === 'smashed') continue;
                            const nonCurrentArray = arr.filter(e => e !== current && e !== "smashed" );
                            const nonCurrent = nonCurrentArray[0];
                            const nonCurrentIndex = arr.indexOf(nonCurrent);
                            if(nonCurrent){
                                arr.splice(i, 1,'smashed')
                                arr.splice(nonCurrentIndex , 1, 'smashed')
                            }
                        }
                        
                        return arr.filter(e => e !== "smashed" ).length
                    }
                ```


## question 5   trucks and items 

            - Given an array, trucks, of n integers 
            - that represents the capacities of different trucks.
            - And an array, items, of m integers that represent the weights of different items,
            - for each item, find  the index fo the smallest truck
            - which has a capacity greater than the item's weight.
            - if  there are multiple such trucks choose the one with the minimum index.
            - if  there is no truck that can carry the item, 
            - report (-1)  as the answer for the corresponding item.

            Note: 
                - Assume that the trucks are indexed starting from 0.
                - Also, multiple items can be mapped to the same truck
                - each item is mapped independently ,
                - hence the trucks do not  lose any capacity when a particular item is mapped to it

                ex :
                    trucks = [4, 5, 7, 2 ] 
                items = [1, 2, 5]


       solution  ====> 

                ```
                                const findIndexOfTruckForEveryItem = (tracks, items ) => {
                                            const result = {}
                                        for(let i = 0; i < items.length; i ++){
                                            const item = items[i];
                                            const pTruck = Math.min(...tracks.filter( e => e > item))
                                            const indexOfTruck = tracks.indexOf(pTruck)

                                            result[item] = indexOTtruck;
                                        }
                                            console.log("result ===> ",result) 
                                        }

                            findIndexOfTruckForEveryItem([4, 5, 7,2 ] , [1, 2, 5]);
                ```

## question 6   packets and channels 

        -  testing the quality of  channels.
        -  ensure the following:
                                            • packet must be sent via a single channel
                                            • channel  transfer at least one packet

        - The quality  is  median-sizes of packets sent in channel.
        - Note: The median  is the middle element if the array is sorted in non-decreasing order.
        - if the number of elements in the array is even, 
        - the median is the average of the two middle elements.
        - Find the maximum possible sum of the qualities of all channels. 
        - If the answer is a float- ing-point value, round it to the next higher integer


        ex 
           packets = [ 1 , 2 , 3, 4. 5] 
           channels =2

    ====> 
           ```
            const maxSumOfQualities = ( packets , nChannels)=> {
                                    
                                    const channels = [];
                                    let sumOfQualities = 0;
                                    for(let i = 0 ; i < nChannels; i ++){
                                        const firstPacket = packets.pop();
                                        channels.push([firstPacket])
                                    }

                                    if(!packets.length){
                                        sumOfQualities = channels.reduce((acc,e) => {
                                            acc = acc + e[0]
                                            return acc;
                                        }, 0)
                                        console.log("channels ==> ", channels)
                                        console.log("sumOfQualities ==> ", sumOfQualities)
                                        return sumOfQualities;
                                    }
                                    
                                    let i = 0
                                    while(packets.length > 0 ){
                                        if(i >= nChannels ){
                                            i = 0;
                                        }
                                        const packet = packets.pop();
                                        channels[i].push(packet);
                                        const tempTotal = channels.reduce((acc,e) => {
                                            acc = acc + getMedian(e);
                                            return acc;
                                        }, 0)
                                    if(tempTotal > sumOfQualities){
                                        sumOfQualities = tempTotal;
                                    }
                                    i++;
                                    }
                                    
                                    console.log("channels ==> ", channels)
                                    console.log("sumOfQualities ==> ", sumOfQualities)
                                    return Math.ceil(sumOfQualities);
                  }

                  const getMedian = (arr) => {
                                    if(!arr.length) return 0;
                                    const n = arr.length;
                                    arr = arr.sort((a,b) =>  a >  b ? 1 : -1)
                                    let  median;
                                    let first;
                                    let second;
                                    
                                    if(n % 2 === 0){
                                        first = arr.length/2
                                        second = first + 1;
                                        median = (arr[first -1 ] + arr[second -1 ])/2
                                    } else {
                                        first = (arr.length + 1)/2
                                        median = arr[first-1 ]
                                    }

                                return median;
                     }

                 maxSumOfQualities([89,48,14] ,3)
                ```

                                    
