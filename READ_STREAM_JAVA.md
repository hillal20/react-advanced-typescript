### List to stream 

        List<String> list = List.of("apple", "banana", "cherry");

        
        Stream<String> stream = list.stream();

        stream.forEach(System.out::println);

### ArrayList to stream 

        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.add("apple");
        arrayList.add("banana");
        arrayList.add("cherry");

    
        Stream<String> stream = arrayList.stream();
        stream.forEach(System.out::println);

### Set to stream 

        Set<String> set = new HashSet<>();
        set.add("apple");
        set.add("banana");
        set.add("cherry");

       
        Stream<String> stream = set.stream();

       
        stream.forEach(System.out::println);


### Map to stream 

   1- entries: 

        Map<String, Integer> map = new HashMap<>();
        map.put("apple", 1);
        map.put("banana", 2);
        map.put("cherry", 3);

       
        Stream<Map.Entry<String, Integer>> entryStream = map.entrySet().stream();

        entryStream.forEach(entry -> 
            System.out.println(entry.getKey() + ": " + entry.getValue())
        );

    2- keys :

        Map<String, Integer> map = new HashMap<>();
        map.put("apple", 1);
        map.put("banana", 2);
        map.put("cherry", 3);

      
        Stream<String> keyStream = map.keySet().stream();

        
        keyStream.forEach(System.out::println);

    3- Values
    
        Map<String, Integer> map = new HashMap<>();
        map.put("apple", 1);
        map.put("banana", 2);
        map.put("cherry", 3);


        Stream<Integer> valueStream = map.values().stream();

      
        valueStream.forEach(System.out::println);


###  .flatMap a list of lists  in streams (it is a nice function in streams to flatten 2D arrays )


       List<List<String>> listOfLists = Arrays.asList(
            Arrays.asList("apple", "banana"),
            Arrays.asList("cherry", "date"),
            Arrays.asList("elderberry", "fig", "grape")
        );

      
        List<String> flattenedList = listOfLists.stream()
            .flatMap(List::stream)
            .collect(Collectors.toList());

     
        System.out.println(flattenedList);

 

 ###  .flatMap a list-of-Maps to a list of all the entries contained in all maps

        Map<String, Integer> map1 = new HashMap<>();
        map1.put("apple", 1);
        map1.put("banana", 2);

        Map<String, Integer> map2 = new HashMap<>();
        map2.put("cherry", 3);
        map2.put("date", 4);

        Map<String, Integer> map3 = new HashMap<>();
        map3.put("elderberry", 5);
        map3.put("fig", 6);

        List<Map<String, Integer>> listOfMaps = Arrays.asList(map1, map2, map3);

       
        List<Map.Entry<String, Integer>> flattenedList = listOfMaps.stream()
            .flatMap(map -> map.entrySet().stream())
            .collect(Collectors.toList());

      
        flattenedList.forEach(entry -> 
            System.out.println(entry.getKey() + ": " + entry.getValue())
        );