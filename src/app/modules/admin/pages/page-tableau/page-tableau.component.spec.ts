import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTableauComponent } from './page-tableau.component';

describe('PageTableauComponent', () => {
  let component: PageTableauComponent;
  let fixture: ComponentFixture<PageTableauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTableauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
