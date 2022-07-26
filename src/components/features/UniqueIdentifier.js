let uniqueId = 0;

export default function UniqueIdentifier(){
    const getId = () => {
        uniqueId++
        return uniqueId;
    }

    return {
        getId
    }
}