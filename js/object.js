// Skelleton
const recipes = [ 
    {
        title: "titel",
        description: "Description",
        img: {
            url: 'https://www.example.com/images/img123.jpg',
            alt: "picturedescription"
                },
        ingredients: [  {
                            amount: "1cup",
                            unit: "",
                            name: "salt",
                        },
                        {
                            amount: "1cup",
                            unit: "",
                            name: "salt",
                        }  
                       ]       
    }
]



// List of all recipes: 

const recipelist = [
    {
        title: "Classic Stuffed Peppers",
        description: "The bell pepper is an excellent vessel for stuffing meat, rice, and, of course, cheese. It's strong enough to hold its shape in the oven, and the flavor is subtle enough to go well with just about anything. This is our favorite recipe, but the customization options are endless.",
        img: {
            url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-classic-stuffed-peppers-vertical-1538066317.jpg?crop=1xw:1xh;center,top&resize=980:*',
            alt: "Classic Stuffed Peppers" 
        },
            ingredients: [  {amount: 1/2,
                         unit: "c",
                         name: "uncooked rice"
                    },
                        {amount: 1,
                         unit: "",
                         name: "medium onion, chopped"
                    }
                        
                        ]   
        
    },
    {
        title: "Black Bean Tostadas",
        description: "With only 5 ingredients, these black bean tostadas are the easiest and fastest meal to throw together. You can always include additional toppings like corn salsa, avocado ranch, or endless crunchy veggies like radishes or pickled red onions, but these are also delicious if you keep things simple, like we did here.",
        img: {
            url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-202101-blackbeantostadas-046-ls-1610740382.jpg?crop=0.835xw:1.00xh;0,0&resize=980:*',
            alt:  "Black Bean Tostadas"  
        }, 
        ingredients: [  {amount: 8,
                         unit: "",
                         name: "tostadas"
                    },
                        {amount: 2,
                         unit: "c.",
                         name: "shredded pepper jack "
                    }
                        
                        ]   
        
    },
    {
        title: "Arroz Con Pollo",
        description: "Want something awesome for dinner but don't want to spend your entire evening cooking and cleaning? Arroz con pollo (chicken with rice in Spanish) is the the perfect recipe. It's an easy one-pot meal that doesn't taste like one, and it tastes even better as leftovers.",
        img: {
            url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190418-arroz-con-pollo-vertical-1-1556222283.png?crop=0.9997369113391213xw:1xh;center,top&resize=980:*',
            alt: "Arroz Con Pollo"
        },
        ingredients: [  {amount: 2,
                         unit:  "tsp.",
                         name: "ground cumin"
                    },
                        {amount: 3,
                         unit:  "tbsp.",
                         name: "extra-virgin olive oil"
                    }
                        
                        ]   
        
    },
    {
        title: "Creamy Steak Fettuccine",
        description: "Whenever we crave steak, this dish is always what we want to make. It comes together quickly and is so full of flavor. It makes us forget chicken fettuccine Alfredo ever existed. If you want the steak without the pasta, may we suggest Cajun butter steak?",
        img: {
            url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190409-creamy-steak-fettucine-vertical-1-1555596323.png?crop=0.9997369113391213xw:1xh;center,top&resize=980:*',
            alt: "Creamy Steak Fettuccine"
        },
        ingredients: [  {amount: 12,
                         unit:  "oz.",
                         name: "fettuccine"
                    },
                        {amount: 1,
                         unit:  "lb.",
                         name: "sirloin steak"
                    }
                        
                        ]   
        
    },
    {
        title: "Baked Risotto with Lemon, Peas & Parmesan",
        description: "If you’ve never made risotto because you didn’t want to stand there stirring forever, then this recipe is for you. It packs all the satisfying flavor of a slow-stirred version into a fraction of the hands-on time!",
        img: {
            url:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baked-lemon-risotto-1662406091.jpg?crop=1xw:0.9991326973113617xh;center,top&resize=980:*',
            alt: "Baked Risotto with Lemon, Peas & Parmesan"
        },
        ingredients: [  {amount: 4,
                         unit:  "tbsp.",
                         name: "butter"
                    },
                        {amount: 1,
                         unit:  "",
                         name: "lemon"
                    }
                        
                        ]   
        
    },
    {
        title: "BBQ Chicken Twice-Baked Potatoes",
        description: "Missing summertime BBQ chicken? Stuff sweet potatoes with rotisserie chicken and your favorite BBQ sauce, then top them with Gouda for a healthy chicken dinner you can enjoy long into fall and beyond.",
        img: {
            url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baked-lemon-risotto-1662406091.jpg?crop=1xw:0.9991326973113617xh;center,top&resize=980:*',
            alt: "BBQ Chicken Twice-Baked Potatoes"
        },

        ingredients: [  {amount: 4,
                         unit:  "",
                         name: "medium sweet potatoes"
                    },
                        {amount: 1, 
                         unit:  "tbsp.",
                         name: "extra-virgin olive oil"
                    }
                        
                        ]   
        
    },
]


console.log(recipelist);

console.log(recipelist[2].ingredients[1].name)