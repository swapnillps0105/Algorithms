let input = 'arie@hacktober.com'
let provider = '';

for (let i = 0; i < input.length; i++) {
    if (input[i - 1] === '@') {
        for (let j = i; j < input.length; j++) {
            if (input[j] === '.') {
                break;
            }
            provider += input[j];
        }
        break;
    }
}
console.log(`Your email provider is ${provider}`);
