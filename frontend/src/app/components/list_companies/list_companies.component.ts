import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';


@Component({
  selector: 'app-list_companies',
  templateUrl: './list_companies.component.html',
  styleUrls: ['./list_companies.component.sass']
})
export class List_companiesComponent implements OnInit {
  public companies: any[];
  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
    
    this.companiesService.getAllCompanies().subscribe((result: any[]) => {
      this.companies = result;
      console.log(this.companies);
    });

  }

}
