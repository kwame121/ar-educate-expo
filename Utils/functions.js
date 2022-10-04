import { bookList } from "./data"
import { lessons } from "./data"

export const getData = (id) => {
    //some code here
    let book = bookList.filter((book)=>{
        return id == book.id
    })[0];

    let lessonList = lessons.filter((lesson)=>{
        return id == lesson.bookId;
    });
    
    return ({book:book,lessons:lessonList});
}

export const getLesson = (id) => {
    let lesson = lessons.filter((lesson)=>{
        return id == lesson?.id;
    })[0];

    return lesson;
}

export const getBook = (string) => 
{
    let books = bookList.filter((book)=>{
        return book.title.toLowerCase().includes(string.toLowerCase()) || book.author.toLowerCase().includes(string.toLowerCase());
    });
    return books;
}

export const getModule = (string) => 
{
    let modules = lessons.filter((lesson)=>{
        return lesson.title.toLowerCase().includes(string.toLowerCase());
    });
    return modules;
}

export const returnDefault = (value) => 
{
    if (value == undefined || value == null)
    {
        return '';
    }
    return value;
}