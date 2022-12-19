


export default function courseProvider() {


    // generate random course data
    const generate = () => Array.from({ length: 10 }, (_, i) => ({
        id: i,
        name: `Course ${i}`,
        description: `Course ${i} description`,
        price: Math.floor(Math.random() * 100),
        image: `https://picsum.photos/200/300?random=${i}`,
    }))
    // return the course data generator
    return { generate }

}