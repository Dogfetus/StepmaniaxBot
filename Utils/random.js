export default function random(num1, hum2){
    const n1 = Math.max(num1, hum2);
    const n2 = Math.min(num1, hum2);

    return Math.floor(Math.random() * (n1 - n2) + n2);
} 