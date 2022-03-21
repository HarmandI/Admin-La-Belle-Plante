import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModifierComponent } from './page-modifier.component';

describe('PageModifierComponent', () => {
  let component: PageModifierComponent;
  let fixture: ComponentFixture<PageModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
