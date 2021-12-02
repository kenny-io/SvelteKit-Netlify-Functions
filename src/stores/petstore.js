import { writable } from "svelte/store";

export const pets = writable([
    {
        
        name: 'Einstein',
        funfact: 'Loves to play around with his soft ball, enjoys wearing clothes and matching outfits with his human.',
        image: 'https://th.bing.com/th/id/OIP.4pYQbDnn6wxQx6l9NJPhXgDYEg?pid=ImgDet&rs=1',
        age: '2 months',
        location: 'USA',
        lookingfor: 'Romance',
        type: 'Dog',
    },
        {
        
        name: 'Griffin',
        funfact: 'Griff is the happiest corgi ever created! he loves dancing, barking and running everywhere.',
        image: 'https://th.bing.com/th/id/R.5d01282fcdcbf9d93ee0321065b7a939?rik=lYKZqqjeqgPpFQ&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2f1280x1024%2f2012%2fAnimals_Dogs_Cute_puppy_033686_.jpg&ehk=W%2fw3251RyCltmU9UpqvphG7X4KF4iz7OiwqA%2bJu91mY%3d&risl=&pid=ImgRaw&r=0',
        age: '10 months',
        location: 'USA',
        lookingfor: 'Friendship',
        type: 'Dog',
    },
        {
        
        name: 'Seymour',
        funfact: 'Seymour is a British furball of goodness, properly trained and loves meeting new people.',
        image: 'https://th.bing.com/th/id/R.6dfb5f6ab25a678a99999f15d5616f1c?rik=7Uyobn2w%2fKmw2g&pid=ImgRaw&r=0',
        age: '6 months',
        location: 'London',
        lookingfor: 'Romance',
        type: 'Dog',
    },
        {
        
        name: 'Badger',
        funfact: 'An animal named for another animal! That’s how quirky our little Badge is!',
        image: 'https://th.bing.com/th/id/OIP._8U6ac4DZEjaRHrt8tQuYgHaEc?pid=ImgDet&rs=1',
        age: '13 months',
        location: 'Paris',
        lookingfor: 'Romance',
        type: "Cat",
    },
                {
        
        name: 'Seymour',
        funfact: 'Seymour is a British furball of goodness, properly trained and loves meeting new people.',
        image: 'https://th.bing.com/th/id/R.baf2e9dd6063f9f49f99e2b2cb1bec77?rik=sJfg69eThyLZKg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fCute-Puppy-Background-Download-Free-1.jpg&ehk=9UE1O2AByYZsSCNXb%2bIb9Jjxzw5fGffRKA1LlpkKZ1A%3d&risl=&pid=ImgRaw&r=0',
        age: '6 months',
        location: 'London',
        lookingfor: 'Romance',
        type: 'Dog',
    },
        {
        
        name: 'Badger',
        slug: 'badger',
        funfact: 'An animal named for another animal! That’s how quirky our little Badge is!',
        image: 'https://lh6.ggpht.com/EoH-UNwa_XRNuk0jB7UQDVQdTSigPu4B5zrb3I5iXk289KYfGZOzJgfwP8Y9DEA1O_k=h900',
        age: '13 months',
        location: 'Paris',
        lookingfor: 'Romance',
        type: "Cat",
    }
]);