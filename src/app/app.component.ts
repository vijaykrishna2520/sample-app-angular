import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello, okok-app';

  public sample():void{
    console.log("sample");
    return;
  }
  public superSample():void{
    console.log("Hello SuperSample");
    return;
  }

  public letsTry():void{
    console.log("Hello suepr try");
    return;
  }
  public keepOnGoing():void{
    console.log("Hello suepr try");
    return;
  }

  public heyBroOneMoreTry():void{
    console.log("super cool")
    return;
  }
}
