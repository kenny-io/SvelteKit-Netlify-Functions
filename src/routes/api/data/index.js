import { pets } from '../../../stores/petstore';
export async function get() {
    // check if the request is POST
    // if (request.method == 'POST') {
    //     // get the data from the request
    //     const data = request.body;
    //     // add data to the array
    //     data.push(data);
    //     // return the new todo
    //     return {
    //         status: 200
    //         body: "OK"
    //     };
    // }
    // get post data from request
    // const postData = request.body;

    try {

        // get all pets 
        console.log("Logging PETS");
       
        // converts pets set to array
        const petsArray = [...pets];

        console.log(petsArray);

        
        return {
            status: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.log(error);
        return {
            status: 400,
            body: JSON.stringify(error)
        };
    }


	
}
