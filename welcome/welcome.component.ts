import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
 email:any;
constructor(private breakpointObserver: BreakpointObserver,private route: ActivatedRoute) {}
  ngOnInit(): void {
      this.email = this.route.snapshot.paramMap.get('email');
     console.log(this.email);
     
  }
  router: any;

  data():any
  { 
{              this.router.navigate(['/Login']);

  }
}

}