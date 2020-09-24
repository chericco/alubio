/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { List_companiesComponent } from './list_companies.component';

describe('List_companiesComponent', () => {
  let component: List_companiesComponent;
  let fixture: ComponentFixture<List_companiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List_companiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List_companiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
