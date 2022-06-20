import { Injectable } from '@angular/core';
// tslint:disable: member-ordering
@Injectable()
export class tomorrowIOService {

    // apikey = 'API-KEY';
    apikey = 'API-KEY';
    constructor() {
    }

    //#region CORE_SERVICES
    //   protected getPromise (url: string, options = null ): Promise<any> {
    //     const native = options ? true : false;
    //     return this.promiseGetHttp ( url, options, native );
    //   }

    //   protected getPromiseFullResponse (url: string, options = null ): Promise<any> {
    //     const native = options ? true : false;
    //     return this.promiseGetHttpFullResponse ( url, options, native );
    //   }

    //   protected postPromise(url: string, data: any, options = null): Promise<any> {
    //     const native = options ? true : false;
    //     return this.promisePostHttp(url, data, options, native );
    //   }

    //   protected putPromise(url: string, data: any, options = null): Promise<any> {
    //     const native = options ? true : false;
    //     return this.promisePutHttp(url, data, options, native);
    //   }

    //   protected deletePromise(url: string, data: any, options = null): Promise<any> {
    //     const native = options ? true : false;
    //     return this.promiseDeleteHttp ( url, data, false);
    //   }
    //#endregion

    //#region PUBLIC_SERVICES
    public getTimelines(location: {latitude: number, longitude: number}, next) {
        const serviceApi = 'https://api.openweathermap.org/data/3.0/onecall?lat={LAT}&lon={LON}&appid={APIKEY}';
        // const _location = `location=${ location.latitude },${ location.longitude }`;
        // const url = `https://api.tomorrow.io/v4/timelines?${ _location }&fields=temperature&timesteps=1h&units=metric&apikey=${ this.apikey }`;
        let url = serviceApi.replace('{LAT}', location.latitude.toString())
                            .replace('{LON}', location.longitude.toString())
                            .replace('{APIKEY}', this.apikey);

        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data));
    }
    //#endregion
}


