import { Component, OnInit } from '@angular/core';
import { tomorrowIOService } from '../services/tomorrow.io.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  current = {
    status: 'day',
    date: new Date(),
    time: new Date().getTime(),
    location: {
      latitude: null,
      longitude: null
    }
  }

  constructor(private service: tomorrowIOService) {}

  ngOnInit(): void {
    
    this.current.date = new Date();

    const hour = new Date().getHours();
    this.current.status = hour > 6 && hour <= 16 ? 'day' :
                          hour > 16 && hour <= 19 ? 'sunset' :
                          hour > 19 && hour <= 23 ? 'night' :
                          hour >= 0 && hour < 6 ? 'morning' : '';

    console.log('this.current.status: ', this.current);

    this.getLocation();
  }

  updateStatus() {
    this.current.status = this.current.status == 'day' ? 'sunset' : 
                          this.current.status == 'sunset' ? 'night' : 
                          this.current.status == 'night' ? 'morning' : 
                          this.current.status == 'morning' ? 'day' : 'day';

  }

  getLocation() {
    let x = document.getElementById("demo");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let lat=position.coords.latitude;
          let lon=position.coords.longitude;

          console.log('position.coords', position.coords);
          this.current.location = { latitude: lat, longitude: lon };
          this.service.getTimelines({ latitude: lat, longitude: lon }, (data) => {})
          
        }, this.showError);
      }
      else{
          x.innerHTML="Geolocation is not supported by this browser.";
      }
  }

  showError(error){
    let x = document.getElementById("demo");
    switch(error.code){
        case error.PERMISSION_DENIED:
            x.innerHTML="User denied the request for Geolocation."
        break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML="Location information is unavailable."
        break;
        case error.TIMEOUT:
            x.innerHTML="The request to get user location timed out."
        break;
        case error.UNKNOWN_ERROR:
            x.innerHTML="An unknown error occurred."
        break;
    }
  }

}
