import PromptSync from 'prompt-sync';
const prompt = PromptSync({ sigint: true }); 

export default class Keyboard {
    static input(message='') {
        return prompt(message);
    }
}