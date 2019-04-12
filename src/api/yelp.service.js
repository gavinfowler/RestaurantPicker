import apiService from './api.service';
import { Business } from './yelp.business';

let YelpService = class YelpService {
	constructor() {
    this.API_KEY = 'MaJPlcK_L8rPekZZcbUHYIvoX-TYVCcha9GX-4FeMytmUFGApjxeOYLZHezXDhatI1tEfTvtVI9JmOz4fKEbZO6rAAmPjjY2XIwZSHl0lZyqcMoIddzzJn8PyfOTXHYx';
	}
    
    getBusinesses(location, numberOfRest) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getMovieList(location, numberOfRest),
            {
              method: 'GET',
              headers: {
                Authorization: 'Bearer '+ this.API_KEY
              }
            })
            .then((response) => response.json())
            .then((response) => {
                let items = [];
                response.businesses.forEach(element => {
                    items.push(new Business(element.name, element.rating));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
};

// Create a Singleton
const yelpService = new YelpService();
export default yelpService;