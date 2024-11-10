import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  searchTerm: String = '';
  constructor(
    @Inject(ActivatedRoute)  private activated: ActivatedRoute,
    @Inject(Router) private router: Router
  ) {
    activated.params.subscribe((params) => {
      console.log(params)
      if (params['searchTerm']) {
       
        this.searchTerm = params['searchTerm'];
      }
    });

  }

  ngOnInit(): void {
  
  }

  search(term: any) {
    console.log(term)
    if (term) {
      this.router.navigateByUrl('home/search/' + term);
    }
  }
}


