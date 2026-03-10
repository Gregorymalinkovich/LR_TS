import Loader from './loader.js';

class AppLoader extends Loader {
    constructor() {
        // Прописываем адрес и ключ ПРЯМО ЗДЕСЬ строками
        super('https://newsapi.org/v2/', {
            apiKey: '7451624cc98243279033a422902d7ec5',
        });
    }
}

export default AppLoader;