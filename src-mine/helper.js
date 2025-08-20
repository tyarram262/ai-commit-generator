export default function validateMessage(input){
    
    if(input.trim() === '' || typeof input != "string"){
        return false;
    }
    return true;
}