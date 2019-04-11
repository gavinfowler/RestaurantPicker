/*
 * A single location to obtain routes for the web API
 */


let ApiService = class ApiService {
	constructor() {
    this.restEndpoint = 'https://api.yelp.com/v3/businesses/search?';
	}

	/*
	* API addresses
	*/
	getMovieList(location,numberOfRest) {
		return this.restEndpoint+'location='+location.toString()+'&limit='+numberOfRest.toString();
	}
};

// Create a Singleton
const apiService = new ApiService();
export default apiService;