import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  searchTerm: String = '';
  constructor(
    @Inject(ActivatedRoute) private activated: ActivatedRoute,
    @Inject(Router) private router: Router
  ) {
    activated.params.subscribe((params) => {
      console.log(params);
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
      }
    });
  }

  ngOnInit(): void {}

  search(term: any) {
    console.log(term);
    if (term) {
      this.router.navigateByUrl('home/search/' + term);
    }
  }

  onInput(value: string): void {
    this.searchTerm = value;
  }
  
  clearInput(inputElement: HTMLInputElement): void {
    this.searchTerm = '';
    inputElement.value = '';
    this.router.navigateByUrl('/home' );
  }
}
