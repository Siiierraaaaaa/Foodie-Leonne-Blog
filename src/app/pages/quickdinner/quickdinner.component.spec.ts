import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickdinnerComponent } from './quickdinner.component';

describe('QuickdinnerComponent', () => {
  let component: QuickdinnerComponent;
  let fixture: ComponentFixture<QuickdinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickdinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickdinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
