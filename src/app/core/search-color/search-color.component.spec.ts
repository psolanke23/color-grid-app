import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchColorComponent } from './search-color.component';

describe('SearchColorComponent', () => {
  let component: SearchColorComponent;
  let fixture: ComponentFixture<SearchColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
