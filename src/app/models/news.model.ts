const categoryList = [
    "all",
    "national",
    "business",
    "sports",
    "world", 
    "politics", 
    "technology", 
    "startup", 
    "entertainment", 
    "miscellaneous", 
    "hatke",
    "science",
    "automobile"
] as const;

export type Category = typeof categoryList[number];

export type NewsResponse = {
    category: Category;
    data: CategoryData;
}

export type CategoryData = {
    author: string;
    content:  string;
    date: string;
    imageUrl: string;
    readMoreUrl: string;
    time: string;
    title:  string;
    url: string;
}