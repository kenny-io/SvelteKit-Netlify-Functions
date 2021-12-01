import { writable } from "svelte/store";

export const pets = writable([
    {
        id: Math.random(),
        name: 'Dooney',
        slug: 'learn-svelte',
        funfact: 'This is some fun fact about me',
        image: 'https://th.bing.com/th/id/OIP.4pYQbDnn6wxQx6l9NJPhXgDYEg?pid=ImgDet&rs=1',
        age: '1',
        location: 'USA',
        lookingfor: 'Romance',
    },
        {
        id: Math.random(),
        name: 'Scoffy',
        slug: 'learn-svelte',
        funfact: 'This is some fun fact about me',
        image: 'https://th.bing.com/th/id/R.5d01282fcdcbf9d93ee0321065b7a939?rik=lYKZqqjeqgPpFQ&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2f1280x1024%2f2012%2fAnimals_Dogs_Cute_puppy_033686_.jpg&ehk=W%2fw3251RyCltmU9UpqvphG7X4KF4iz7OiwqA%2bJu91mY%3d&risl=&pid=ImgRaw&r=0',
        age: '1',
        location: 'USA',
        lookingfor: 'Romance',
    },
        {
        id: Math.random(),
        name: 'Moon',
        slug: 'moon',
        funfact: 'This is some fun fact about me',
        image: 'https://th.bing.com/th/id/R.6dfb5f6ab25a678a99999f15d5616f1c?rik=7Uyobn2w%2fKmw2g&pid=ImgRaw&r=0',
        age: '1',
        location: 'USA',
        lookingfor: 'Romance',
    }
]);